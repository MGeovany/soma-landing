import PageHeader from "@/components/PageHeader";
import GlassCard from "@/components/GlassCard";

export const metadata = {
  title: "Privacy Policy",
  description: "How Soma handles your data: it doesn't. No accounts, no cloud, no tracking.",
};

const EMAIL = "marlon@savvly.com";
const UPDATED = "July 23, 2026";

function Section({ title, children }) {
  return (
    <div className="mb-8">
      <h2 className="mb-2 text-xl font-bold text-textPrimary">{title}</h2>
      <div className="space-y-3 text-sm leading-relaxed text-textMuted">{children}</div>
    </div>
  );
}

export default function Privacy() {
  return (
    <>
      <PageHeader kicker="Legal" title="Privacy Policy" />

      <section className="mx-auto max-w-3xl py-14">
        <GlassCard className="p-7 md:p-10">
          <p className="mono mb-8 text-xs text-textSubtle">Last updated: {UPDATED}</p>

          <Section title="Summary">
            <p>
              Soma is a remote control for Samsung Smart TVs. It talks to your TV directly over your
              local network. It has <strong className="text-textPrimary">no servers</strong>,
              requires <strong className="text-textPrimary">no account</strong>, and collects{" "}
              <strong className="text-textPrimary">no personal data</strong>. There is nothing to
              sell, share, or leak.
            </p>
          </Section>

          <Section title="Information we collect">
            <p>
              None. Soma does not collect, transmit, or store any personal information about you. We
              have no analytics, no advertising SDKs, and no crash-reporting services.
            </p>
          </Section>

          <Section title="Information stored on your device">
            <p>
              To function, Soma saves the TVs you configure — their name, IP address, MAC address,
              chosen transport, and the authorization token issued by the TV — on your device using
              the operating system's standard local storage. This data never leaves your device
              except to communicate with your TV on your own network.
            </p>
          </Section>

          <Section title="Local network access">
            <p>
              Soma communicates with your TV over your local network using Samsung's local
              WebSocket remote protocol, and (optionally) sends a Wake-on-LAN packet to power the TV
              on. macOS and iOS will ask for your permission before Soma can access the local
              network. No data is sent to the internet.
            </p>
          </Section>

          <Section title="Third parties">
            <p>
              Soma does not share data with any third party, because it does not collect any. The
              app has no third-party analytics, tracking, or advertising components.
            </p>
          </Section>

          <Section title="Children's privacy">
            <p>
              Soma does not collect personal information from anyone, including children under 13.
            </p>
          </Section>

          <Section title="Changes to this policy">
            <p>
              If this policy changes, the updated version will be posted on this page with a new
              “last updated” date.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              Questions about privacy? Email{" "}
              <a href={`mailto:${EMAIL}`} style={{ color: "var(--link)" }}>
                {EMAIL}
              </a>
              .
            </p>
          </Section>
        </GlassCard>
      </section>
    </>
  );
}
