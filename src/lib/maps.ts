/** Build a maps URL that prefers the device's native maps app when possible. */
export function getMapsUrl(lat: number, lng: number, label: string): string {
  const query = encodeURIComponent(label);
  const ua = typeof navigator !== "undefined" ? navigator.userAgent : "";

  const isIos =
    /iPhone|iPad|iPod/i.test(ua) ||
    (/Macintosh/i.test(ua) &&
      typeof navigator !== "undefined" &&
      navigator.maxTouchPoints > 1);

  const isMacSafari =
    /Macintosh/i.test(ua) &&
    /Safari/i.test(ua) &&
    !/Chrome|Chromium|CriOS|Edg|Firefox|FxiOS/i.test(ua);

  // Apple devices → Apple Maps
  if (isIos || isMacSafari) {
    return `https://maps.apple.com/?ll=${lat},${lng}&q=${query}`;
  }

  // Android → geo: opens the default maps app (often Google Maps)
  if (/Android/i.test(ua)) {
    return `geo:${lat},${lng}?q=${lat},${lng}(${query})`;
  }

  // Other desktop browsers → Google Maps web
  return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
}

export function getMapsUrlFromAddress(label: string, address: string): string {
  const query = encodeURIComponent(`${label}, ${address}, Oaxaca`);
  const ua = typeof navigator !== "undefined" ? navigator.userAgent : "";

  const isIos =
    /iPhone|iPad|iPod/i.test(ua) ||
    (/Macintosh/i.test(ua) &&
      typeof navigator !== "undefined" &&
      navigator.maxTouchPoints > 1);

  const isMacSafari =
    /Macintosh/i.test(ua) &&
    /Safari/i.test(ua) &&
    !/Chrome|Chromium|CriOS|Edg|Firefox|FxiOS/i.test(ua);

  if (isIos || isMacSafari) {
    return `https://maps.apple.com/?q=${query}`;
  }

  if (/Android/i.test(ua)) {
    return `geo:0,0?q=${query}`;
  }

  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}
