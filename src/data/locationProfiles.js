// ZIP-prefix based ecological region profiles.
// Match is determined purely by the first 3 digits of a 5-digit ZIP.

export const locationProfiles = [
  {
    id: "inland_ct",
    region: "Inland & Central Connecticut",
    state: "CT",
    usdaZones: ["6a", "6b"],
    epaEcoregion: "Connecticut River Valley / Inland Southern New England",
    climateNotes: "Colder winter lows than the coast, mixed suburban and woodland landscapes, moderate humidity.",
    zipPrefixes: ["060", "061", "062", "063"],
    plantPools: ["southern_new_england", "inland_ct_tolerant", "cold_hardy_ct"],
  },
  {
    id: "coastal_ct",
    region: "Coastal & Southern Connecticut",
    state: "CT",
    usdaZones: ["6b", "7a", "7b"],
    epaEcoregion: "Northeastern Coastal Zone",
    climateNotes: "Coastal influence softens winters; humid summers; some salt and wind exposure near shore.",
    zipPrefixes: ["064", "065", "066", "067", "068", "069"],
    plantPools: ["southern_new_england", "coastal_ct_tolerant", "ct_native"],
  },
  {
    id: "rhode_island",
    region: "Rhode Island / Coastal Southern New England",
    state: "RI",
    usdaZones: ["6b", "7a"],
    epaEcoregion: "Northeastern Coastal Zone",
    climateNotes: "Coastal influence, humid summers, mild-to-moderate winters. Some areas experience salt spray.",
    zipPrefixes: ["028", "029"],
    plantPools: ["southern_new_england", "coastal_new_england"],
  },
  {
    id: "western_ma",
    region: "Western Massachusetts / Berkshires & Upland New England",
    state: "MA",
    usdaZones: ["5b", "6a", "6b"],
    epaEcoregion: "Northeastern Highlands",
    climateNotes: "Colder winters, more elevation, more woodland and meadow-edge conditions. Inland continental climate.",
    zipPrefixes: ["010", "011", "012", "013"],
    plantPools: ["cold_hardy_new_england", "woodland_native"],
  },
  {
    id: "eastern_ma",
    region: "Eastern & Coastal Massachusetts",
    state: "MA",
    usdaZones: ["6b", "7a"],
    epaEcoregion: "Northeastern Coastal Zone",
    climateNotes: "Coastal influence, moderate winters, some salt and wind exposure on the South Shore and Cape.",
    zipPrefixes: ["014", "015", "016", "017", "018", "019", "020", "021", "022", "023", "024", "025", "026", "027"],
    plantPools: ["southern_new_england", "coastal_new_england"],
  },
  {
    id: "boston_metro",
    region: "Boston Metro",
    state: "MA",
    usdaZones: ["7a"],
    epaEcoregion: "Coastal Urban Southern New England",
    climateNotes: "Urban heat island effect, mild winters for New England, coastal proximity. More resilient plants do best.",
    zipPrefixes: ["055"],
    plantPools: ["southern_new_england", "urban_tolerant_native"],
  },
];

/**
 * Match a 5-digit ZIP to a location profile via its 3-digit prefix.
 * Returns null if no match (unsupported ZIP).
 */
export function matchLocationProfile(input) {
  if (!input || input.trim() === "") return null;
  const digits = input.trim().replace(/\D/g, "");
  if (digits.length < 3) return null;
  const prefix = digits.slice(0, 3);

  for (const profile of locationProfiles) {
    if (profile.zipPrefixes.includes(prefix)) return profile;
  }

  return null;
}