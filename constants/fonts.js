const fonts = [
  "Block 01",
  "Block 03",
  "Block 06",
  "Brussels",
  "Calgary",
  "Decorative 03",
  "Saipan",
  "Script 01",
  "Script 02",
  "Script 04",
  "Istanbul",
  "Los Angeles",
];

export const fontItems = fonts.map((font) => ({
  label: font,
  value: font.toLowerCase().replace(/\s+/g, "_"),
}));
