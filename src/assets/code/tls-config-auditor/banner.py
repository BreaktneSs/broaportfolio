from rich.console import Console

console = Console()

LOGO = r"""
[bold green] _____ _     ____     _____         _ _ _              [/bold green]
[bold green]|_   _| |   / ___|   / ____|       | (_) |             [/bold green]
[bold green]  | | | |   \___ \  | |     ___  ___| |_| |_ ___  _ __  [/bold green]
[bold green]  | | | |    ___) | | |    / _ \/ __| | | __/ _ \| '_ \ [/bold green]
[bold green] _| |_| |___|____/  | |___| (_) \__ \ | | || (_) | | | |[/bold green]
[bold green]|_____|______|      \_____\___/|___/_|_|\__\___/|_| |_|[/bold green]
[dim]            TLS Config Auditor — audita TLS en segundos[/dim]
"""


def mostrar_logo():
    console.print(LOGO)
