import NeuCard from "./NeuCard";

function Key({ children, accent = false, className = "" }) {
  return (
    <div
      className={`neu-key text-lg font-semibold ${accent ? "neu-key--accent" : ""} ${className}`}
      style={{ height: "clamp(60px, 8.5vw, 82px)" }}
    >
      {children}
    </div>
  );
}

/** A stylized mock of the Soma remote: pure CSS, no screenshots needed. */
export default function RemoteMock() {
  return (
    <NeuCard hero className="mx-auto w-full max-w-[460px] rounded-[38px] p-7 md:p-9">
      {/* Brand switcher: the same remote drives either TV. */}
      <div className="mb-7 flex items-center justify-between gap-3">
        <div className="neu-seg" role="group" aria-label="TV brand">
          <span className="neu-seg-item neu-seg-item--active">Samsung</span>
          <span className="neu-seg-item">LG</span>
        </div>
        <span className="mono flex items-center gap-2 text-xs text-success">
          <span className="live-dot" /> Connected
        </span>
      </div>

      <div className="mb-7 flex items-baseline justify-between">
        <span className="text-base font-semibold text-textPrimary">Living room</span>
        <span className="mono text-[11px] text-textSubtle">192.168.1.24</span>
      </div>

      {/* D-pad, sunk into the body of the remote */}
      <div className="neu-inset mx-auto rounded-[30px] p-4">
        <div className="mx-auto grid w-full max-w-[280px] grid-cols-3 gap-3">
          <div />
          <Key>▲</Key>
          <div />
          <Key>◀</Key>
          <Key accent className="text-xl">
            OK
          </Key>
          <Key>▶</Key>
          <div />
          <Key>▼</Key>
          <div />
        </div>
      </div>

      {/* Transport */}
      <div className="mt-6 grid grid-cols-3 gap-3">
        <Key>⏮</Key>
        <Key>⏯</Key>
        <Key>⏭</Key>
      </div>

      {/* Volume */}
      <div className="mt-3 grid grid-cols-3 gap-3">
        <Key>–</Key>
        <Key className="text-base">MUTE</Key>
        <Key>+</Key>
      </div>
    </NeuCard>
  );
}
