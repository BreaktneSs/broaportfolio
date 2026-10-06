#!/usr/bin/env python3
import os
import sys

from rich.console import Console

from modules.banner import mostrar_logo
from modules.tls_validator import validar_tls

console = Console()


def limpiar_pantalla():
    """Limpia la consola según el sistema operativo."""
    os.system("cls" if os.name == "nt" else "clear")


def menu_principal():
    """Despliega el menú de opciones principal."""
    print("\n[1] Validar seguridad de TLS")
    print("[2] Salir")


def manejar_opcion(opcion: str):
    """Ejecuta la acción según la opción seleccionada."""
    if opcion == "1":
        host = input("🖥  IP o dominio a escanear: ").strip()
        ports = input("📌 Puerto(s) (ej: 443,8443): ").strip() or "443"
        validar_tls(host, ports)
    elif opcion == "2":
        print("\n[✓] Saliendo... ¡Hasta luego!")
        sys.exit(0)
    else:
        print("[!] Opción no válida. Intenta de nuevo.")


def main():
    limpiar_pantalla()
    mostrar_logo()
    while True:
        menu_principal()
        opcion = input("\nSelecciona una opción: ").strip()
        manejar_opcion(opcion)
        input("\nPresiona ENTER para continuar...")
        limpiar_pantalla()
        mostrar_logo()


if __name__ == "__main__":
    main()
