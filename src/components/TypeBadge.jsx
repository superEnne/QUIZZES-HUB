// Question-type pill, shared by the quiz player and the exam reviewer page.
const TYPES = {
  mc:             { label: "Multiple Choice", color: "#7c3aed", bg: "#f3e8ff" },
  identification: { label: "Identification",  color: "#5b4bc4", bg: "#ece9ff" },
  true_false:     { label: "True or False",   color: "#db2777", bg: "#fce7f3" },
  enumeration:    { label: "Enumeration",     color: "#9333ea", bg: "#faf5ff" },
  output_tracing: { label: "Output Tracing",  color: "#c026d3", bg: "#fae8ff" },
  fill_code:      { label: "Fill the Code",   color: "#be185d", bg: "#ffe4f0" },
  matching:       { label: "Matching Type",   color: "#7e22ce", bg: "#f3e8ff" },
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
