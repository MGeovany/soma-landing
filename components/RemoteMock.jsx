import GlassCard from "./GlassCard";

function Key({ children, accent = false, className = "" }) {
  return (
    <div
      className={`grid place-items-center rounded-[18px] text-lg font-semibold ${className}`}
      style={{
        height: "clamp(64px, 9vw, 88px)",
        color: accent ? "#fff" : "var(--text-primary)",
        background: accent
          ? "linear-gradient(135deg, var(--accent-bright), var(--accent))"
          : "linear-gradient(180deg, rgba(255,255,255,0.075), rgba(255,255,255,0.035))",
        border: accent ? "1px solid rgba(46,155,255,0.42)" : "1px solid rgba(255,255,255,0.10)",
        boxShadow: accent
          ? "0 12px 28px rgba(46,155,255,0.26), inset 0 1px 0 rgba(255,255,255,0.18)"
          : "inset 0 1px 0 rgba(255,255,255,0.08)",
      }}
    >
      {children}
    </div>
  );
}

/** A stylized mock of the Soma remote: pure CSS, no screenshots needed. */
export default function RemoteMock() {
  return (
    <GlassCard hero className="mx-auto w-full max-w-[460px] rounded-[36px] p-8 md:p-10">
      <div className="mb-10 flex items-center justify-between">
        <span className="stat-label text-[13px] tracking-[0.22em]">Living room</span>
        <span className="flex items-center gap-3 font-mono text-base text-success md:text-lg">
          <span className="live-dot" /> Connected
        </span>
      </div>

      {/* D-pad */}
      <div className="mx-auto grid w-full max-w-[300px] grid-cols-3 gap-4">
        <div />
        <Key>▲</Key>
        <div />
        <Key>◀</Key>
        <Key accent className="text-2xl">OK</Key>
        <Key>▶</Key>
        <div />
        <Key>▼</Key>
        <div />
      </div>

      {/* Transport */}
      <div className="mt-8 grid grid-cols-3 gap-4">
        <Key>⏮</Key>
        <Key>⏯</Key>
        <Key>⏭</Key>
      </div>

      {/* Volume */}
      <div className="mt-4 grid grid-cols-3 gap-4">
        <Key>–</Key>
        <Key>🔇</Key>
        <Key>+</Key>
      </div>
    </GlassCard>
  );
}
