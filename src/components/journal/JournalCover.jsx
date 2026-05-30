import { useState } from "react";
import { AlertCircle } from "lucide-react";
import { matchLocationProfile } from "../../data/locationProfiles";
import { getPlantsForProfile } from "../../data/plants";

export default function JournalCover({ onOpen }) {
  const [zip, setZip] = useState("");
  const [error, setError] = useState("");

  const handleZipInput = (e) => {
    const val = e.target.value.replace(/\D/g, "").slice(0, 5);
    setZip(val);
    setError("");
  };

  const handleOpen = () => {
    const digits = zip.replace(/\D/g, "");
    if (digits.length !== 5) { setError("Please enter a full 5-digit ZIP code."); return; }
    const profile = matchLocationProfile(digits);
    if (!profile) { setError("ZIP not supported. Covers CT, RI, and MA only."); return; }
    const plants = getPlantsForProfile(profile);
    onOpen({ profile, plants, zip: digits});
  };

  const handleKey = (e) => { if (e.key === "Enter") handleOpen(); };
  const ready = zip.length === 5;

  return (
    <div className="min-h-screen flex items-center justify-center p-6 sm:p-12" style={{ backgroundColor: "#2c1810", backgroundImage: "radial-gradient(ellipse at 30% 50%, #3a2218 0%, #1a0e08 100%)" }}>
      
      {/* The physical journal book */}
      <div className="relative w-full max-w-xl md:max-w-2xl" style={{ filter: "drop-shadow(0 40px 80px rgba(0,0,0,0.7)) drop-shadow(0 8px 20px rgba(0,0,0,0.5))" }}>
        
        {/* Book spine (left edge) */}
        <div
          className="absolute top-0 bottom-0 left-0 w-5 rounded-l-sm"
          style={{
            background: "linear-gradient(to right, #1a0e08, #3d2210, #2a1508)",
            boxShadow: "inset -3px 0 6px rgba(0,0,0,0.4)",
            zIndex: 10,
          }}
        />

        {/* Book back-cover depth */}
        <div
          className="absolute top-2 -right-2 bottom-0 rounded-r-sm rounded-br-sm"
          style={{
            backgroundColor: "#1a0e08",
            zIndex: -1,
            left: "4px",
          }}
        />

        {/* Cover */}
        <div
          className="relative ml-5 rounded-r-sm"
          style={{
            backgroundColor: "#4a6e3a",
            backgroundImage: [
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Crect width='4' height='4' fill='%234a6e3a'/%3E%3Ccircle cx='1' cy='1' r='0.5' fill='rgba(0,0,0,0.08)'/%3E%3Ccircle cx='3' cy='3' r='0.5' fill='rgba(0,0,0,0.08)'/%3E%3C/svg%3E\")",
            ].join(", "),
            minHeight: "1150px",
          }}
        >
          {/* Canvas texture overlay */}
          <div className="absolute inset-0 rounded-r-sm" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(0,0,0,0.08) 50%, rgba(255,255,255,0.02) 100%)", mixBlendMode: "overlay" }} />

          {/* Embossed border frame */}
          <div className="absolute inset-4 rounded-sm" style={{ border: "1px solid rgba(180,160,80,0.3)", boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.3)" }} />
          <div className="absolute inset-5 rounded-sm" style={{ border: "1px solid rgba(180,160,80,0.12)" }} />

          {/* Inner content */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-10 py-14" style={{ minHeight: "640px" }}>

            {/* Series label — embossed look */}
            <div className="mb-8">
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="h-px w-8" style={{ backgroundColor: "rgba(210,180,80,0.5)" }} />
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.35em", textTransform: "uppercase", color: "rgba(210,180,80,0.7)" }}>
                  Journal
                </span>
                <div className="h-px w-8" style={{ backgroundColor: "rgba(210,180,80,0.5)" }} />
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(240,228,200,0.92)" }}>
                Southern New England · Vol. I
              </p>
            </div>

            {/* Main title */}
            <div className="mb-3">
              <h1 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.2rem, 7vw, 4.6rem)",
                color: "rgba(240,228,200,0.92)",
                lineHeight: 1.08,
                letterSpacing: "-0.01em",
                textShadow: "0 1px 3px rgba(0,0,0,0.5), 0 -1px 0 rgba(255,255,255,0.06)",
              }}>
                The Northeastern Native Plant<br />
                <em style={{ fontStyle: "italic", color: "rgba(210,200,160,0.8)", fontSize: "0.85em" }}>Finder</em>
              </h1>
            </div>

            {/* Ornamental divider */}
            <div className="flex items-center justify-center gap-3 my-6">
              <div className="h-px w-12" style={{ backgroundColor: "rgba(180,150,60,0.35)" }} />
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="2" fill="rgba(180,150,60,0.5)" />
                <circle cx="8" cy="8" r="5" stroke="rgba(180,150,60,0.25)" strokeWidth="0.5" fill="none"/>
                <line x1="8" y1="2" x2="8" y2="0" stroke="rgba(180,150,60,0.3)" strokeWidth="0.5"/>
                <line x1="8" y1="16" x2="8" y2="14" stroke="rgba(180,150,60,0.3)" strokeWidth="0.5"/>
                <line x1="2" y1="8" x2="0" y2="8" stroke="rgba(180,150,60,0.3)" strokeWidth="0.5"/>
                <line x1="16" y1="8" x2="14" y2="8" stroke="rgba(180,150,60,0.3)" strokeWidth="0.5"/>
              </svg>
              <div className="h-px w-12" style={{ backgroundColor: "rgba(180,150,60,0.35)" }} />
            </div>

            {/* Subtitle */}
            <p style={{
              fontFamily: "'Crimson Pro', serif",
              fontSize: "1.40rem",
              color: "rgba(240,228,200,0.92)",
              lineHeight: 1.7,
              maxWidth: "26rem",
              marginBottom: "2.5rem",
            }}>
              Enter your ZIP code to find native plants that can succeed in your area!
            </p>

            {/* ZIP input — looks like a field written into the journal */}
            <div className="w-full max-w-[18rem] mb-6s">
              <label style={{
                fontFamily: "'Inter', sans-serif", fontSize: ".9rem", fontWeight: 700,
                letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(240,228,200,0.92)",
                display: "block", marginBottom: "0.6rem",
              }}>
                Your ZIP Code
              </label>
              <input
                type="text" inputMode="numeric" placeholder="e.g. 06010"
                value={zip} onChange={handleZipInput} onKeyDown={handleKey} maxLength={5}
                className="w-full focus:outline-none text-center"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "2.1rem",
                  fontWeight: 600,
                  color: "rgba(240,228,200,0.95)",
                  backgroundColor: "transparent",
                  borderBottom: "1px solid rgba(180,160,60,0.4)",
                  paddingBottom: "0.4rem",
                  letterSpacing: "0.3em",
                  caretColor: "rgba(210,180,80,0.8)",
                }}
              />
            </div>

            {error && (
              <div className="flex items-center justify-center gap-1.5 mb-4">
                <AlertCircle className="w-3 h-3" style={{ color: "#c87040" }} />
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "#c87040" }}>{error}</span>
              </div>
            )}

            {/* Open button — stamped look */}
            <button
              onClick={handleOpen}
              disabled={!ready}
              className="transition-all duration-200"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 800,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: ready ? "rgba(240,228,200,0.95)" : "rgba(180,160,80,0.3)",
                border: `1px solid ${ready ? "rgba(210,180,80,0.5)" : "rgba(180,160,80,0.15)"}`,
                padding: "0.75rem 2rem",
                backgroundColor: ready ? "rgba(0,0,0,0.25)" : "transparent",
                cursor: ready ? "pointer" : "not-allowed",
                boxShadow: ready ? "inset 0 1px 0 rgba(255,255,255,0.06), 0 2px 8px rgba(0,0,0,0.3)" : "none",
              }}
            >
              Open Journal
            </button>

            {/* Coverage — bottom stamp */}
            <p className="mt-10" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(240,228,200,0.92)" }}>
              A regional native planting database for Connecticut, Rhode Island, and Massachusetts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}