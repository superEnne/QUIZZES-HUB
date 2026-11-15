// Question-type pill, shared by the quiz player and the exam reviewer page.
const TYPES = {
  mc:             { label: "Multiple Choice", color: "#7c3aed", bg: "#f3e8ff" },
  identification: { label: "Identification",  color: "#0369a1", bg: "#e0f2fe" },
  true_false:     { label: "True or False",   color: "#c2410c", bg: "#ffedd5" },
  enumeration:    { label: "Enumeration",     color: "#047857", bg: "#d1fae5" },
  output_tracing: { label: "Output Tracing",  color: "#b45309", bg: "#fef3c7" },
  fill_code:      { label: "Fill the Code",   color: "#be185d", bg: "#fce7f3" },
  matching:       { label: "Matching Type",   color: "#0e7490", bg: "#cffafe" },
};

export default function TypeBadge({ type }) {
  const t = TYPES[type] || TYPES.mc;
  return (
    <span style={{
      display: "inline-flex", alignItems: "center",
      padding: "0.2rem 0.65rem",
      borderRadius: "999px",
      fontSize: "0.68rem", fontWeight: 800,
      letterSpacing: "0.06em", textTransform: "uppercase",
      background: t.bg, color: t.color,
      border: `1.5px solid ${t.color}22`,
    }}>
      {t.label}
    </span>
  );
}
