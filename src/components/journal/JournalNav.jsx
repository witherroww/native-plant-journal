export default function JournalNav({ tabs, active, onChange }) {
  return (
    <nav className="flex items-end gap-0 overflow-x-auto scrollbar-hide" style={{ marginTop: "0" }}>
      {tabs.map((tab, i) => {
        const isActive = tab.id === active;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className="relative shrink-0 px-3 sm:px-4 py-2.5 transition-all duration-200"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.9rem",
              fontWeight: isActive ? 700 : 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: isActive ? "#e8e0cc" : "#4a4a38",
              borderBottom: isActive ? "2px solid #7ab86a" : "2px solid transparent",
              backgroundColor: isActive ? "rgba(122,184,106,0.08)" : "transparent",
              whiteSpace: "nowrap",
            }}
          >
            {tab.label}
          </button>
        );
      })}
    </nav>
  );
}