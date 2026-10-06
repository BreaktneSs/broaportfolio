"""
Envoltorio sobre `nmap --script ssl-enum-ciphers` que detecta protocolos TLS
obsoletos y cifrados débiles en un host:puerto, y presenta el resultado con
rich.

Requiere nmap instalado y con el NSE script ssl-enum-ciphers disponible
(viene por defecto en la mayoría de distribuciones).
"""

import re
import shutil
import subprocess

from rich.console import Console

console = Console()

INSECURE_PROTOCOLS = ("SSLv2", "SSLv3", "TLSv1.0", "TLSv1.1")
WEAK_STRENGTH_GRADES = ("C", "D", "E", "F")


def _run_nmap(host: str, ports: str) -> str:
    nmap_path = shutil.which("nmap")
    if not nmap_path:
        console.print("[red][!] nmap no está instalado o no está en el PATH.[/red]")
        raise SystemExit(1)

    cmd = [nmap_path, "-p", ports, "--script", "ssl-enum-ciphers", host]
    console.print(f"[cyan][🔍] Escaneando {host} en puerto(s): {ports}[/cyan]\n")

    result = subprocess.run(cmd, capture_output=True, text=True, timeout=120)
    return result.stdout


def _port_states(nmap_output: str) -> list[tuple[str, str, str]]:
    """Devuelve [(puerto, protocolo, estado), ...] a partir del bloque PORT STATE SERVICE."""
    rows = []
    for line in nmap_output.splitlines():
        match = re.match(r"(\d+)/(tcp|udp)\s+(\w+)\s+(\S+)", line)
        if match:
            port, proto, state, service = match.groups()
            rows.append((port, state, service))
    return rows


def _insecure_protocols_found(nmap_output: str) -> list[str]:
    return [p for p in INSECURE_PROTOCOLS if p in nmap_output]


def _weak_strength_findings(nmap_output: str) -> list[str]:
    """Otras señales de debilidad que ssl-enum-ciphers reporta además del
    protocolo: cadencia de cifrado anónima, least strength bajo, etc."""
    findings = []
    for match in re.finditer(r"least strength:\s*([A-F])", nmap_output):
        grade = match.group(1)
        if grade in WEAK_STRENGTH_GRADES:
            findings.append(f"least strength {grade}")
    if "Anonymous key exchange" in nmap_output:
        findings.append("anonymous key exchange")
    return findings


def validar_tls(host: str, ports: str) -> None:
    """Escanea `host` en `ports`, imprime el reporte y marca configuraciones inseguras."""
    output = _run_nmap(host, ports)

    if not output.strip():
        console.print("[red][!] Sin respuesta de nmap. ¿Host alcanzable?[/red]")
        return

    for port, state, service in _port_states(output):
        console.print(f"[📌] Puerto {port} – Estado: {state}")

    console.print("[📋] Resultado del script ssl-enum-ciphers:\n")

    # Imprime el bloque ssl-enum-ciphers tal cual lo reporta nmap, con sangría.
    in_block = False
    for line in output.splitlines():
        stripped = line.lstrip("| _")
        if "ssl-enum-ciphers" in line:
            in_block = True
            continue
        if in_block:
            if line.startswith(("PORT", "Nmap done")):
                break
            console.print(f"  {stripped}")

    insecure = _insecure_protocols_found(output)
    weak = _weak_strength_findings(output)

    if insecure:
        console.print(
            f"\n[bold yellow][⚠️] Se detectó TLS inseguro ({'/'.join(p.replace('TLSv', '') for p in insecure)})[/bold yellow]"
        )
    if weak:
        console.print(f"[bold yellow][⚠️] Configuración débil: {', '.join(weak)}[/bold yellow]")
    if not insecure and not weak:
        console.print("\n[bold green][✓] No se detectaron protocolos TLS obsoletos ni cifrados débiles.[/bold green]")
