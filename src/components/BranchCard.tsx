"use client";

import { branchCoordinates } from "@/content/branchCoordinates";
import { useMessages } from "@/i18n/LanguageProvider";
import type { BranchMessage } from "@/i18n/messages/types";
import { getMapsUrl, getMapsUrlFromAddress } from "@/lib/maps";

type BranchCardProps = {
  branch: BranchMessage;
  active?: boolean;
  onSelect?: (id: string) => void;
};

export function BranchCard({ branch, active = false, onSelect }: BranchCardProps) {
  const t = useMessages();
  const coords = branchCoordinates[branch.id];

  function openInMaps() {
    const url = coords
      ? getMapsUrl(coords.lat, coords.lng, branch.name)
      : getMapsUrlFromAddress(branch.name, branch.address);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <article
      id={branch.id}
      className={`flex h-full scroll-mt-28 flex-col border bg-white p-6 transition ${
        active
          ? "border-teal shadow-[0_0_0_1px_rgba(31,138,122,0.35)]"
          : "border-line hover:border-teal/50"
      }`}
    >
      <button
        type="button"
        className="w-full text-left"
        onClick={() => onSelect?.(branch.id)}
      >
        <h3 className="font-display text-xl font-semibold text-navy">
          {branch.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">
          {branch.address}
        </p>
      </button>
      <ul className="mt-3 space-y-1 text-sm font-medium text-navy">
        {branch.phones.map((phone) => (
          <li key={phone}>
            <a
              href={`tel:${phone.replace(/[^\d+]/g, "")}`}
              className="transition hover:text-teal"
            >
              {phone}
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-sm text-ink-muted">{branch.hours}</p>
      <ul className="mt-4 space-y-1.5 border-t border-line pt-4 text-sm text-ink-muted">
        {branch.amenities.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-6">
        <button
          type="button"
          onClick={openInMaps}
          className="flex w-full items-center justify-center rounded-md bg-teal px-4 py-3 text-center text-sm font-semibold leading-none text-white transition hover:bg-teal-dark"
        >
          {t.branchesPage.directions}
        </button>
      </div>
    </article>
  );
}
