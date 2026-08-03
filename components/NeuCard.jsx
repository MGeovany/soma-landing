/**
 * Neumorphic surface. `hero` extrudes further; `inset` carves the surface in
 * instead of raising it.
 */
export default function NeuCard({ hero = false, inset = false, className = "", children }) {
  const base = inset ? "neu-inset" : `neu-card ${hero ? "neu-card--hero" : ""}`;
  return <div className={`${base} ${className}`}>{children}</div>;
}
