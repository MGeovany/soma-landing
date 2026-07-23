import Link from "next/link";
import Button from "@/components/Button";
import GlassCard from "@/components/GlassCard";
import RemoteMock from "@/components/RemoteMock";

const features = [
  { icon: "🧭", title: "Full navigation", text: "D-pad and OK, Home, Back, Menu and Exit: everything your physical remote does." },
  { icon: "🔊", title: "Volume & channels", text: "Volume, mute, channel up/down, the channel list and direct number entry." },
  { icon: "🎬", title: "Media & apps", text: "Play/pause, skip and seek, plus one-tap launch for YouTube, Netflix, Prime Video and more." },
  { icon: "🔌", title: "Sources", text: "Jump to HDMI 1–3, TV or the source menu without hunting for the button." },
  { icon: "⌨️", title: "Send text", text: "Type on your keyboard and send it straight to the TV's search fields." },
  { icon: "⚡", title: "Wake & sleep", text: "Power the TV on with Wake-on-LAN and schedule an automatic power-off timer." },
  { icon: "📺", title: "Multiple TVs", text: "Save several TVs with their IP, MAC and authorization token, and switch in a tap." },
  { icon: "🔒", title: "Private by design", text: "Talks to the TV over your local network only. No cloud, no account, no tracking." },
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
          <img
            src="/icon.png"
            alt="Soma app icon"
            width="88"
            height="88"
            className="mb-6 rounded-[22px] border border-white/10 shadow-[0_16px_50px_rgba(46,155,255,0.24)]"
          />
          <span className="chip chip--accent mb-5">Mac & iPhone</span>
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-textPrimary md:text-6xl">
            Your Samsung TV remote,{" "}
            <span style={{ color: "var(--accent-bright)" }}>reimagined.</span>
          </h1>
          <p className="mt-5 max-w-md text-lg text-textMuted">
            Soma controls your Samsung Smart TV from your Mac menu bar and your iPhone over your
            home network, privately, with no cloud and no account.
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
            Requires a Samsung Smart TV (Tizen) on the same Wi-Fi network.
          </p>
        </div>
        <div className="relative">
          <RemoteMock />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16">
        <SectionTitle
          kicker="What it does"
          title="Everything the remote does, and a bit more"
          subtitle="Built with native Apple frameworks. Fast, focused, and quietly powerful."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <GlassCard key={f.title} className="p-5">
              <div className="mb-3 text-2xl">{f.icon}</div>
              <h3 className="mb-1.5 text-lg font-semibold text-textPrimary">{f.title}</h3>
              <p className="text-sm text-textMuted">{f.text}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Platforms */}
      <section className="py-16">
        <SectionTitle kicker="Two apps, one core" title="At home on every Apple device" />
        <div className="grid gap-5 md:grid-cols-2">
          <GlassCard hero className="p-8">
            <div className="stat-label mb-3">macOS</div>
            <h3 className="text-2xl font-bold text-textPrimary">Lives in your menu bar</h3>
            <p className="mt-3 text-textMuted">
              A compact remote a click away in the top-right, plus a full window for setup, multiple
              devices and global keyboard shortcuts.
            </p>
          </GlassCard>
          <GlassCard hero className="p-8">
            <div className="stat-label mb-3">iOS</div>
            <h3 className="text-2xl font-bold text-textPrimary">In your pocket</h3>
            <p className="mt-3 text-textMuted">
              A touch-first remote for iPhone and iPad with the same controls and the same dark,
              glassy design.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* Privacy teaser */}
      <section className="py-16">
        <GlassCard hero className="p-8 text-center md:p-12">
          <div className="stat-label mb-3">Privacy</div>
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-textPrimary">
            Your remote talks to your TV. That's it.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-textMuted">
            Soma communicates directly with your TV on your local network. It has no servers,
            collects no personal data, and requires no account.
          </p>
          <div className="mt-7 flex justify-center gap-3">
            <Button href="/privacy" variant="ghost">
              Read the Privacy Policy
            </Button>
          </div>
        </GlassCard>
      </section>
    </>
  );
}
