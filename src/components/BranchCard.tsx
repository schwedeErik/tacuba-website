import type { BranchMessage } from "@/i18n/messages/types";

export function BranchCard({ branch }: { branch: BranchMessage }) {
  return (
    <article className="flex h-full flex-col border border-line bg-white p-6 transition hover:border-teal/50">
      <h3 className="font-display text-xl font-semibold text-navy" id={branch.id}>
        {branch.name}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-muted">
        {branch.address}
      </p>
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
    </article>
  );
}
