"use client";

import { useEffect, useRef } from "react";
import type { DivIcon, Map as LeafletMap, Marker as LeafletMarker } from "leaflet";
import {
  branchCoordinates,
  oaxacaMapCenter,
} from "@/content/branchCoordinates";
import type { BranchMessage } from "@/i18n/messages/types";
import { getMapsUrl } from "@/lib/maps";

type BranchesMapProps = {
  branches: BranchMessage[];
  activeId: string | null;
  onSelect: (id: string) => void;
  directionsLabel: string;
  mapLabel: string;
};

type MarkerBundle = {
  marker: LeafletMarker;
  defaultIcon: DivIcon;
  activeIcon: DivIcon;
};

export function BranchesMap({
  branches,
  activeId,
  onSelect,
  directionsLabel,
  mapLabel,
}: BranchesMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const markersRef = useRef<Record<string, MarkerBundle>>({});
  const onSelectRef = useRef(onSelect);

  useEffect(() => {
    onSelectRef.current = onSelect;
  }, [onSelect]);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    let cancelled = false;

    async function init() {
      const L = await import("leaflet");
      await import("leaflet/dist/leaflet.css");

      if (cancelled || !containerRef.current) return;

      const map = L.map(containerRef.current, {
        scrollWheelZoom: false,
        attributionControl: true,
      }).setView([oaxacaMapCenter.lat, oaxacaMapCenter.lng], 12);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
      }).addTo(map);

      const makeIcon = (active: boolean) =>
        L.divIcon({
          className: `tacuba-map-marker${active ? " is-active" : ""}`,
          html: `<span class="tacuba-map-pin" aria-hidden="true"></span>`,
          iconSize: active ? [32, 32] : [28, 28],
          iconAnchor: active ? [16, 32] : [14, 28],
          popupAnchor: [0, active ? -28 : -24],
        });

      const defaultIcon = makeIcon(false);
      const activeIcon = makeIcon(true);
      const bounds: [number, number][] = [];

      for (const branch of branches) {
        const coords = branchCoordinates[branch.id];
        if (!coords) continue;

        bounds.push([coords.lat, coords.lng]);
        const marker = L.marker([coords.lat, coords.lng], {
          icon: defaultIcon,
        }).addTo(map);

        const mapsUrl = getMapsUrl(coords.lat, coords.lng, branch.name);
        marker.bindPopup(
          `<strong>${branch.name}</strong><br/>${branch.address}<br/><a href="${mapsUrl}" target="_blank" rel="noopener noreferrer">${directionsLabel}</a>`,
        );

        marker.on("click", () => {
          onSelectRef.current(branch.id);
        });

        markersRef.current[branch.id] = {
          marker,
          defaultIcon,
          activeIcon,
        };
      }

      if (bounds.length > 0) {
        map.fitBounds(bounds, { padding: [40, 40], maxZoom: 13 });
      }

      mapRef.current = map;
      setTimeout(() => map.invalidateSize(), 50);
    }

    void init();

    return () => {
      cancelled = true;
      mapRef.current?.remove();
      mapRef.current = null;
      markersRef.current = {};
    };
  }, [branches, directionsLabel]);

  useEffect(() => {
    Object.entries(markersRef.current).forEach(([id, bundle]) => {
      bundle.marker.setIcon(
        activeId === id ? bundle.activeIcon : bundle.defaultIcon,
      );
    });

    if (activeId && markersRef.current[activeId] && mapRef.current) {
      const coords = branchCoordinates[activeId];
      if (coords) {
        mapRef.current.panTo([coords.lat, coords.lng], { animate: true });
        markersRef.current[activeId].marker.openPopup();
      }
    }
  }, [activeId]);

  return (
    <div
      ref={containerRef}
      className="h-[min(70vh,520px)] w-full overflow-hidden border border-line bg-mist-deep"
      role="region"
      aria-label={mapLabel}
    />
  );
}
