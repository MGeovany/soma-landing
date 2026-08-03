import Button from "@/components/Button";
import NeuCard from "@/components/NeuCard";
import RemoteMock from "@/components/RemoteMock";

const features = [
  { icon: "🧭", title: "Full navigation", text: "D-pad and OK, Home, Back, Menu and Exit: everything your physical remote does." },
  { icon: "🔊", title: "Volume & channels", text: "Volume, mute, channel up/down, the channel list and direct number entry." },
  { icon: "🎬", title: "Media & apps", text: "Play/pause, skip and seek, plus one-tap launch for YouTube, Netflix, Prime Video and more." },
  { icon: "🔌", title: "Sources", text: "Jump to HDMI 1–3, TV or the source menu without hunting for the button." },
  { icon: "⌨️", title: "Send text", text: "Type on your keyboard and send it straight to the TV's search fields." },
  { icon: "⚡", title: "Wake & sleep", text: "Power the TV on with Wake-on-LAN and schedule an automatic power-off timer." },
  { icon: "📺", title: "Samsung and LG", text: "Save Samsung Tizen TVs and LG Push connections side by side, then switch in a tap." },
  { icon: "🔒", title: "Private by design", text: "Talks to the TV over your local network only. No cloud, no account, no tracking." },
];

const brands = [
  {
    name: "Samsung",
    kicker: "Tizen · local WebSocket",
    color: "var(--accent)",
    labelClass: "stat-label",
    text: "Samsung Smart TVs running Tizen, roughly 2016 and newer. Pair once, accept the prompt on screen, and Soma remembers the TV.",
    points: ["D-pad, volume and channels", "App launch and source switching", "Wake-on-LAN power on"],
  },
  {
    name: "LG",
    kicker: "New · LG Push",
    color: "var(--lg)",
    labelClass: "stat-label stat-label--lg",
    text: "LG TVs now connect through LG Push, with the same layout and the same shortcuts you already use on Samsung.",
    points: ["Same remote, same keys", "Saved alongside your Samsung TVs", "One tap to switch between them"],
  },
];

function SectionTitle({ kicker, title, subtitle }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      {kicker && <div className="stat-label mb-3">{kicker}</div>}
      <h2 className="text-3xl font-bold tracking-tight text-textPrimary md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-base text-textMuted">{subtitle}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
        <div>
          <div className="chip chip--accent mb-6">
            <span className="live-dot" /> New · Samsung and LG
          </div>
          <img
            src="/app-icon.png"
            alt="Soma app icon"
            width="88"
            height="88"
            className="mb-6 rounded-[24px] shadow-raised"
          />
          <h1 className="text-4xl font-bold leading-[1.12] tracking-tight text-textPrimary md:text-6xl">
            Your TV remote,{" "}
            <span style={{ color: "var(--accent)" }}>reimagined.</span>
          </h1>
          <p className="mt-5 max-w-md text-lg text-textMuted">
            Soma controls your TV from your Mac menu bar and your iPhone, over your home network,
            privately, with no cloud and no account. And it now works with both{" "}
            <strong className="font-semibold" style={{ color: "var(--accent)" }}>
              Samsung
            </strong>{" "}
            and{" "}
            <strong className="font-semibold" style={{ color: "var(--lg)" }}>
              LG
            </strong>
            .
          </p>
          <div id="download" className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="/#download">
              <span className="mono text-xs">◈</span> Coming to the App Store
            </Button>
            <Button href="/support" variant="ghost">
              How it works
            </Button>
          </div>
          <p className="mono mt-4 text-xs text-textSubtle">
            Requires a Samsung Smart TV (Tizen) or an LG Push-compatible TV on the same Wi-Fi
            network.
          </p>
        </div>
        <div className="relative">
          <RemoteMock />
        </div>
      </section>

      {/* Samsung + LG */}
      <section id="tvs" className="py-16">
        <SectionTitle
          kicker="Now two brands"
          title="Samsung and LG, one remote"
          subtitle="Soma started on Samsung Tizen. LG support has landed, so both TVs live in the same device list."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {brands.map((b) => (
            <NeuCard key={b.name} hero className="p-8">
              <div className={`${b.labelClass} mb-3`}>{b.kicker}</div>
              <h3 className="text-3xl font-bold tracking-tight" style={{ color: b.color }}>
                {b.name}
              </h3>
              <p className="mt-3 text-textMuted">{b.text}</p>
              <ul className="mt-5 flex flex-col gap-2 text-sm text-textMuted">
                {b.points.map((p) => (
                  <li key={p} className="flex items-center gap-3">
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: b.color }}
                      aria-hidden="true"
                    />
                    {p}
                  </li>
                ))}
              </ul>
            </NeuCard>
          ))}
        </div>
        <p className="mono mt-6 text-center text-xs text-textSubtle">
          Independent app · Not affiliated with or endorsed by Samsung or LG.
        </p>
      </section>

      {/* Features */}
      <section id="features" className="py-16">
        <SectionTitle
          kicker="What it does"
          title="Everything the remote does, and a bit more"
          subtitle="Built with native Apple frameworks. Fast, focused, and quietly powerful."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <NeuCard key={f.title} className="p-6">
              <div className="neu mb-4 grid h-12 w-12 place-items-center rounded-2xl text-xl">
                {f.icon}
              </div>
              <h3 className="mb-1.5 text-lg font-semibold text-textPrimary">{f.title}</h3>
              <p className="text-sm text-textMuted">{f.text}</p>
            </NeuCard>
          ))}
        </div>
      </section>

      {/* Platforms */}
      <section className="py-16">
        <SectionTitle kicker="Two apps, one core" title="At home on every Apple device" />
        <div className="grid gap-5 md:grid-cols-2">
          <NeuCard hero className="p-8">
            <div className="stat-label mb-3">macOS</div>
            <h3 className="text-2xl font-bold text-textPrimary">Lives in your menu bar</h3>
            <p className="mt-3 text-textMuted">
              A compact remote a click away in the top-right, plus a full window for setup, multiple
              devices and global keyboard shortcuts.
            </p>
          </NeuCard>
          <NeuCard hero className="p-8">
            <div className="stat-label mb-3">iOS</div>
            <h3 className="text-2xl font-bold text-textPrimary">In your pocket</h3>
            <p className="mt-3 text-textMuted">
              A touch-first remote for iPhone and iPad with the same controls and the same soft,
              tactile design.
            </p>
          </NeuCard>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="pb-8">
        <NeuCard hero className="flex flex-col items-center gap-4 p-10 text-center md:p-14">
          <div className="stat-label">Ready when you are</div>
          <h2 className="max-w-xl text-3xl font-bold tracking-tight text-textPrimary md:text-4xl">
            Put your Samsung and LG TVs in one remote
          </h2>
          <p className="max-w-md text-textMuted">
            No account, no cloud, no tracking. Just your TV and the device already in your hand.
          </p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
            <Button href="/#download">
              <span className="mono text-xs">◈</span> Coming to the App Store
            </Button>
            <Button href="/support" variant="ghost">
              Read the setup guide
            </Button>
          </div>
        </NeuCard>
      </section>
    </>
  );
}
