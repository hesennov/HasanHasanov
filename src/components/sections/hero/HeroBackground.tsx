/** Animated background: gradient orbs + grid pattern */
export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid */}
      <div className="absolute inset-0 grid-pattern opacity-60" />

      {/* Blue orb top-left */}
      <div
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-blue-600/8 blur-3xl pulse-glow"
        style={{ animationDelay: '0s' }}
      />

      {/* Violet orb bottom-right */}
      <div
        className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-violet-600/8 blur-3xl pulse-glow"
        style={{ animationDelay: '1.5s' }}
      />

      {/* Cyan thin stripe */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />
    </div>
  );
}
