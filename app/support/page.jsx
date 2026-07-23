import GlassCard from "@/components/GlassCard";
import PageHeader from "@/components/PageHeader";
import Button from "@/components/Button";

export const metadata = {
  title: "Support",
  description: "Get started with Soma, check requirements, and find answers to common questions.",
};

const SUPPORT_EMAIL = "marlon@savvly.com";

const steps = [
  { n: "01", title: "Open Soma", text: "Launch the app on your Mac or iPhone. On Mac it appears in the menu bar." },
  { n: "02", title: "Add your TV", text: "In Devices, add your TV by its IP address (find it in the TV's network settings)." },
  { n: "03", title: "Connect & accept", text: "Tap Connect, then accept the authorization prompt shown on the TV the first time." },
  { n: "04", title: "Control away", text: "Use the D-pad, volume, apps and more. Soma remembers the TV for next time." },
];

const faqs = [
  {
    q: "Which TVs are supported?",
    a: "Samsung Smart TVs running Tizen with the local network remote protocol (most models from ~2016 onward). Your device and the TV must be on the same Wi-Fi network.",
  },
  {
    q: "The TV isn't connecting. What should I check?",
    a: "Make sure both devices are on the same network, that the IP address is correct, and that you accepted the on-screen authorization prompt on the TV. Some TVs require the secure (wss) option enabled.",
  },
  {
    q: "A button does nothing on my TV.",
    a: "Not every model implements every key (for example direct HDMI or track-skip keys). When a command isn't supported, the TV simply ignores it. Use the on-screen Source menu as a fallback.",
  },
  {
    q: "Why does Soma ask for local network access?",
    a: "Soma reaches your TV directly over the LAN. iOS/macOS require your permission before an app can talk to other devices on your local network.",
  },
  {
    q: "Does Soma need an account or internet connection?",
    a: "No. There is no account and no cloud. Everything happens on your local network.",
  },
];

export default function Support() {
  return (
    <>
      <PageHeader
        kicker="Support"
        title="Help & getting started"
        subtitle="Set up Soma in under a minute, and find answers to the most common questions."
      />

      {/* Getting started */}
      <section className="py-14">
        <h2 className="mb-6 text-2xl font-bold text-textPrimary">Getting started</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <GlassCard key={s.n} className="p-5">
              <div className="mono mb-2 text-2xl font-bold" style={{ color: "var(--accent-bright)" }}>
                {s.n}
              </div>
              <h3 className="mb-1 text-base font-semibold text-textPrimary">{s.title}</h3>
              <p className="text-sm text-textMuted">{s.text}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Requirements */}
      <section className="py-6">
        <GlassCard className="p-6">
          <div className="stat-label mb-3">Requirements</div>
          <ul className="grid gap-2 text-sm text-textMuted sm:grid-cols-2">
            <li>• Samsung Smart TV (Tizen), ~2016 or newer</li>
            <li>• Mac (macOS 13+) or iPhone/iPad (iOS 16+)</li>
            <li>• TV and device on the same Wi-Fi network</li>
            <li>• MAC address of the TV for Wake-on-LAN (optional)</li>
          </ul>
        </GlassCard>
      </section>

      {/* FAQ */}
      <section className="py-14">
        <h2 className="mb-6 text-2xl font-bold text-textPrimary">Frequently asked</h2>
        <div className="flex flex-col gap-3">
          {faqs.map((f) => (
            <GlassCard key={f.q} className="p-5">
              <h3 className="mb-1.5 text-base font-semibold text-textPrimary">{f.q}</h3>
              <p className="text-sm text-textMuted">{f.a}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="py-6">
        <GlassCard hero className="flex flex-col items-center gap-4 p-8 text-center md:p-12">
          <div className="stat-label">Still stuck?</div>
          <h2 className="text-2xl font-bold text-textPrimary">We're happy to help</h2>
          <p className="max-w-md text-textMuted">
            Email us and we'll get back to you. Include your TV model and what you were trying to do.
          </p>
          <Button href={`mailto:${SUPPORT_EMAIL}`} external>
            {SUPPORT_EMAIL}
          </Button>
        </GlassCard>
      </section>
    </>
  );
}
