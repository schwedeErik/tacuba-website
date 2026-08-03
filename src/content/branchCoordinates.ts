export type BranchCoordinates = {
  lat: number;
  lng: number;
};

/** Approximate coordinates for each branch (OpenStreetMap / Nominatim). */
export const branchCoordinates: Record<string, BranchCoordinates> = {
  "santa-rosa": { lat: 17.0915, lng: -96.735 },
  centro: { lat: 17.05695, lng: -96.73052 },
  "san-sebastian": { lat: 17.06477, lng: -96.67931 },
  violetas: { lat: 17.07801, lng: -96.71052 },
  universidad: { lat: 17.0455, lng: -96.712 },
  xoxo: { lat: 17.01011, lng: -96.73585 },
};

export const oaxacaMapCenter = { lat: 17.05, lng: -96.71 };
