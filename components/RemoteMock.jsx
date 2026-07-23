import GlassCard from "./GlassCard";

function Key({ children, accent = false, wide = false }) {
  return (
    <div
      className="grid place-items-center rounded-[10px] text-sm font-semibold"
      style={{
        height: 44,
        color: accent ? "#fff" : "var(--text-primary)",
        background: accent
          ? "linear-gradient(135deg, var(--accent-bright), var(--accent))"
          : "rgba(255,255,255,0.05)",
        border: "1px solid var(--border)",
        boxShadow: accent ? "0 4px 14px var(--accent-glow)" : "none",
        gridColumn: wide ? "span 3" : "auto",
      }}
    >
      {children}
    </div>
  );
}

/** A stylized mock of the Soma remote — pure CSS, no screenshots needed. */
export default function RemoteMock() {
  return (
    <GlassCard hero className="mx-auto w-full max-w-[300px] p-5">
      <div className="mb-4 flex items-center justify-between">
        <span className="stat-label">Living room</span>
        <span className="flex items-center gap-2 text-xs text-success">
          <span className="live-dot" /> Connected
        </span>
      </div>

      {/* D-pad */}
      <div className="mx-auto grid w-[190px] grid-cols-3 gap-2">
        <div />
        <Key>▲</Key>
        <div />
        <Key>◀</Key>
        <Key accent>OK</Key>
        <Key>▶</Key>
        <div />
        <Key>▼</Key>
        <div />
      </div>

      {/* Transport */}
      <div className="mt-4 grid grid-cols-3 gap-2">
        <Key>⏮</Key>
        <Key>⏯</Key>
        <Key>⏭</Key>
      </div>

      {/* Volume */}
      <div className="mt-2 grid grid-cols-3 gap-2">
        <Key>–</Key>
        <Key>🔇</Key>
        <Key>+</Key>
      </div>
    </GlassCard>
  );
}
