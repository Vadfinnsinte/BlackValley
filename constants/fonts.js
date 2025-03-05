const fonts = [
  "Block 01",
  "Block 03",
  "Block 04",
  "Block 06",
  "Serif 01",
  "Decorative 03",
  "Script 02",
  "Script 04",
  "Istanbul",
  "Los Angeles",
  "San Diego",
  "Annat (kan diskuteras)",
];

export const fontItems = fonts.map((font) => ({
  label: font,
  value: font.toLowerCase().replace(/\s+/g, "_"),
}));
