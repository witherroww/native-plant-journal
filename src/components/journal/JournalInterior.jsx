import { useState, useEffect } from "react";
import PagePlants from "@/components/journal/PagePlants";
import PageFavorites from "@/components/journal/PageFavorites";
import PageBirds from "@/components/journal/PageBirds";
import PageWhyNative from "@/components/journal/PageWhyNative";
import PageBeforePlant from "@/components/journal/PageBeforePlant";
import PageAuthor from "@/components/journal/PageAuthor";

const TABS = [
  { id: "plants", label: "Recommended Plants", num: "I" },
  { id: "favorites", label: "Ryan's Favorites", num: "II" },
  { id: "birds", label: "Birds & Observations", num: "III" },
  { id: "why", label: "Why Native Plants", num: "IV" },
  { id: "before", label: "Before You Plant", num: "V" },
  { id: "author", label: "About the Author", num: "VI" },
];

export default function JournalInterior({ profile, plants, onClose }) {
  const [activeTab, setActiveTab] = useState("plants");
  const [animating, setAnimating] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setTimeout(() => setMounted(true), 30); }, []);

  const handleTabChange = (newTab) => {
    if (newTab === activeTab || animating) return;
    window.scrollTo({

      top: 0,

      behavior: "smooth",

    })
    setAnimating(true);
    setTimeout(() => { setActiveTab(newTab); setAnimating(false); }, 220);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f7f2e8",
        opacity: mounted ? 1 : 0,
        transition: "opacity 0.4s ease",
      }}
    >
      {/* Journal spread layout */}
      <div className="max-w-6xl mx-auto flex" style={{ minHeight: "100vh" }}>

        {/* LEFT: Physical journal sidebar / binding area */}
        <div
          className="hidden md:flex flex-col sticky top-0 shrink-0"
          style={{
            width: "220px",
            height: "100vh",
            backgroundColor: "#4a6e3a",
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Crect width='4' height='4' fill='%234a6e3a'/%3E%3Ccircle cx='1' cy='1' r='0.5' fill='rgba(0,0,0,0.1)'/%3E%3Ccircle cx='3' cy='3' r='0.5' fill='rgba(0,0,0,0.1)'/%3E%3C/svg%3E\")",
            boxShadow: "4px 0 20px rgba(0,0,0,0.15), inset -3px 0 8px rgba(0,0,0,0.2)",
            overflowY: "auto",
          }}
        >
          {/* Spine strip */}
          <div className="absolute left-0 top-0 bottom-0 w-3" style={{ background: "linear-gradient(to right, #1a0e08, #2a1808)", borderRight: "1px solid rgba(0,0,0,0.3)" }} />

          <div className="pl-6 pr-4 py-8 flex flex-col h-full">
            {/* Journal title on sidebar */}
            <div className="mb-8">
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", fontWeight: 800, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(210,190,90,0.6)", marginBottom: "0.3rem" }}>
                Field Journal
              </p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", color: "rgba(240,228,200,0.9)", lineHeight: 1.25, marginBottom: "0.2rem" }}>
                Native Plant<br /><em>Guide</em>
              </h2>
              <p style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.5rem", color: "rgba(240,185,140,0.55)", fontStyle: "italic" }}>
                {profile.region}
              </p>
            </div>

            {/* Ruled divider */}
            <div className="mb-6" style={{ height: "1px", backgroundColor: "rgba(210,190,90,0.2)" }} />

            {/* Tab navigation — looks like physical tabbed pages */}
            <nav className="flex flex-col gap-1 flex-1">
              {TABS.map((tab) => {
                const isActive = tab.id === activeTab;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => {
                      console.log("mobile tab clicked:", tab.id);
                      handleTabChange(tab.id);
                    }}
                    className="text-left transition-all duration-150 group"
                    style={{
                      padding: "0.6rem 0.75rem",
                      backgroundColor: isActive ? "rgba(247,242,232,0.95)" : "transparent",
                      borderLeft: isActive ? "3px solid rgba(210,180,60,0.8)" : "3px solid transparent",
                      marginLeft: "-3px",
                    }}
                  >
                    <span style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: isActive ? "#4a6e3a" : "rgba(210,195,150,0.55)",
                      display: "block",
                      marginBottom: "0.1rem",
                    }}>
                      {tab.num}
                    </span>
                    <span style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.0rem",
                      color: isActive ? "#2a3a20" : "rgba(230,215,175,0.7)",
                      lineHeight: 1.3,
                      display: "block",
                    }}>
                      {tab.label}
                    </span>
                  </button>
                );
              })}
            </nav>

            {/* Bottom: zone info + close */}
            <div className="mt-auto pt-6 border-t" style={{ borderColor: "rgba(210,190,90,0.15)" }}>
              <div className="flex flex-wrap gap-1 mb-4">
                {profile.usdaZones.map(z => (
                  <span key={z} style={{
                    fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", fontWeight: 700,
                    letterSpacing: "0.1em", textTransform: "uppercase",
                    color: "rgba(210,190,90,0.6)", border: "1px solid rgba(210,190,90,0.25)",
                    padding: "0.15rem 0.4rem",
                  }}>
                    Zone {z}
                  </span>
                ))}
              </div>
              <button
                onClick={onClose}
                className="transition-opacity hover:opacity-70"
                style={{
                  fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", fontWeight: 700,
                  letterSpacing: "0.2em", textTransform: "uppercase",
                  color: "rgba(240,185,140,0.55)",
                }}
              >
                ← Back to Cover
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT: Paper page content area */}
        <div className="flex-1 relative" style={{ backgroundColor: "#f7f2e8" }}>

          {/* Top ruled line — like a notebook */}
          <div className="sticky top-0 z-30" style={{ backgroundColor: "#f7f2e8", borderBottom: "2px solid #d4c8a8", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
            {/* Mobile nav */}
            <div className="md:hidden flex overflow-x-auto" style={{ borderBottom: "1px solid #d4c8a8" }}>
              {TABS.map(tab => {
                const isActive = tab.id === activeTab;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className="shrink-0 px-4 py-2.5 transition-colors"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.52rem", fontWeight: 700, letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: isActive ? "#4a6e3a" : "#a09070",
                      borderBottom: isActive ? "2px solid #4a6e3a" : "2px solid transparent",
                      marginBottom: "-1px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Page header row */}
            <div className="flex items-center justify-between px-6 sm:px-10 py-3">
              <div className="flex items-center gap-4">
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", fontStyle: "italic", color: "#8a7a58" }}>
                  {TABS.find(t => t.id === activeTab)?.label}
                </span>
                <div className="hidden sm:block h-px w-8" style={{ backgroundColor: "#c8b890" }} />
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.65rem", letterSpacing: "0.1em", color: "#b0a080", textTransform: "uppercase" }}>
                  {profile.epaEcoregion}
                </span>
              </div>
              <button
                onClick={onClose}
                className="md:hidden transition-opacity hover:opacity-60"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.5rem", fontWeight: 700, letterSpacing: "0.2em", color: "#9a8a68", textTransform: "uppercase" }}
              >
                ← Cover
              </button>
            </div>
          </div>

          {/* Page content with fade transition */}
          <div style={{ opacity: animating ? 0 : 1, transition: "opacity 0.22s ease" }}>
            {activeTab === "plants" && <PagePlants profile={profile} plants={plants} />}
            {activeTab === "favorites" && <PageFavorites />}
            {activeTab === "birds" && <PageBirds />}
            {activeTab === "why" && <PageWhyNative />}
            {activeTab === "before" && <PageBeforePlant />}
            {activeTab === "author" && <PageAuthor profile={profile} plants={plants} />}
          </div>

          {/* Page footer — ruled bottom */}
          <div className="px-6 sm:px-10 py-6 flex items-center justify-between" style={{ borderTop: "1px solid #d4c8a8" }}>
            <span style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.4rem", fontStyle: "italic", color: "#b0a080" }}>
              Native Plant Field Journal — Southern New England
            </span>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.5rem", letterSpacing: "0.1em", color: "#c8b890", textTransform: "uppercase" }}>
              {TABS.findIndex(t => t.id === activeTab) + 1} / {TABS.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}