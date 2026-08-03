/** Fixed soft-light canvas with faint tinted glows, behind all content. */
export default function AmbientBackground() {
  return <div className="ambient-bg fixed inset-0 -z-10" aria-hidden="true" />;
}
