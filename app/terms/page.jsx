import PageHeader from "@/components/PageHeader";
import NeuCard from "@/components/NeuCard";

export const metadata = {
  title: "Terms of Use",
  description: "The terms that govern your use of the Soma app.",
};

const EMAIL = "marlon.castro@thefndrs.com";
const UPDATED = "July 23, 2026";

function Section({ title, children }) {
  return (
    <div className="mb-8">
      <h2 className="mb-2 text-xl font-bold text-textPrimary">{title}</h2>
      <div className="space-y-3 text-sm leading-relaxed text-textMuted">{children}</div>
    </div>
  );
}

export default function Terms() {
  return (
    <>
      <PageHeader kicker="Legal" title="Terms of Use" />

      <section className="mx-auto max-w-3xl py-14">
        <NeuCard className="p-7 md:p-10">
          <p className="mono mb-8 text-xs text-textSubtle">Last updated: {UPDATED}</p>

          <Section title="Acceptance">
            <p>By downloading or using Soma, you agree to these Terms of Use. If you do not agree, do not use the app.</p>
          </Section>

          <Section title="License">
            <p>
              Soma grants you a personal, non-exclusive, non-transferable license to use the app on
              devices you own or control, for controlling your own compatible TVs.
            </p>
          </Section>

          <Section title="Acceptable use">
            <p>
              Use Soma only on networks and devices you are authorized to use. Do not attempt to
              interfere with, reverse engineer for unlawful purposes, or misuse the app.
            </p>
          </Section>

          <Section title="No affiliation with Samsung or LG">
            <p>
              Soma is an independent application. It is not affiliated with, endorsed by, or
              sponsored by Samsung or LG. “Samsung”, “LG”, and related marks are the property of
              their respective owners. Compatibility depends on your TV model and firmware.
            </p>
          </Section>

          <Section title="Disclaimer">
            <p>
              Soma is provided “as is”, without warranties of any kind. Some features rely on
              protocols that vary by TV model and may not work on every device. We do not guarantee
              uninterrupted or error-free operation.
            </p>
          </Section>

          <Section title="Limitation of liability">
            <p>
              To the maximum extent permitted by law, Soma and its authors are not liable for any
              indirect, incidental, or consequential damages arising from your use of the app.
            </p>
          </Section>

          <Section title="Changes">
            <p>These terms may be updated from time to time; the current version is posted on this page.</p>
          </Section>

          <Section title="Contact">
            <p>
              Questions? Email{" "}
              <a href={`mailto:${EMAIL}`} style={{ color: "var(--link)" }}>
                {EMAIL}
              </a>
              .
            </p>
          </Section>
        </NeuCard>
      </section>
    </>
  );
}
