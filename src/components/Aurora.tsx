/**
 * Capa de fondo con "auroras" de gradiente y una rejilla sutil.
 * Puro CSS: siempre presente, incluso sin WebGL.
 */
export function Aurora() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* rejilla */}
      <div
        className="absolute inset-0 opacity-[0.18] dark:opacity-[0.12]"
        style={{
          backgroundImage:
            'linear-gradient(rgb(var(--hairline)/0.5) 1px,transparent 1px),linear-gradient(90deg,rgb(var(--hairline)/0.5) 1px,transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage:
            'radial-gradient(ellipse 80% 60% at 50% 0%,#000 40%,transparent 100%)',
        }}
      />
      {/* blobs */}
      <div className="animate-aurora absolute -top-40 -left-40 h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(circle,rgb(var(--glow-a)/0.5),transparent_60%)] blur-3xl" />
      <div
        className="animate-aurora absolute top-1/3 -right-52 h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgb(var(--glow-b)/0.4),transparent_60%)] blur-3xl"
        style={{ animationDirection: 'reverse', animationDuration: '24s' }}
      />
      <div className="absolute bottom-0 left-1/4 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgb(236_72_153/0.28),transparent_60%)] blur-3xl" />

      {/* viñeta */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgb(var(--bg-base)/0.8)_100%)]" />
    </div>
  )
}
