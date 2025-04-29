import { type ReactNode } from "react";

export function Card({
  title,
  children,
  href,
  icon,
}: {
  title: string;
  children: ReactNode;
  href: string;
  icon?: ReactNode;
}) {
  return (
    <a
      className="ui-group ui-relative ui-overflow-hidden ui-rounded-xl ui-border ui-border-neutral-700 ui-bg-gradient-to-b ui-from-neutral-800/70 ui-to-neutral-900 ui-px-6 ui-py-5 ui-shadow-lg ui-transition-all hover:ui-scale-[1.02] hover:ui-border-neutral-500 hover:ui-shadow-xl"
      href={`${href}?utm_source=create-turbo&utm_medium=with-tailwind&utm_campaign=create-turbo"`}
      rel="noopener noreferrer"
      target="_blank"
    >
      {/* Card shine effect */}
      <div className="ui-pointer-events-none ui-absolute ui-inset-0 ui-rounded-xl ui-bg-gradient-to-br ui-from-white/5 ui-to-transparent ui-opacity-0 ui-transition-opacity group-hover:ui-opacity-100" />

      {/* Header with icon */}
      <div className="ui-flex ui-items-center ui-gap-3 ui-mb-3">
        {icon && <div className="ui-text-neutral-300">{icon}</div>}
        <h2 className="ui-text-2xl ui-font-bold ui-tracking-tight ui-text-neutral-200">
          {title}
        </h2>
      </div>

      {/* Card content */}
      <p className="ui-mb-4 ui-text-sm ui-leading-relaxed ui-text-neutral-400">
        {children}
      </p>

      {/* Button styling */}
      <div className="ui-mt-auto ui-flex ui-items-center ui-gap-1 ui-text-sm ui-font-medium ui-text-neutral-300">
        <span>Learn more</span>
        <span className="ui-inline-block ui-transition-transform group-hover:ui-translate-x-1">
          →
        </span>
      </div>
    </a>
  );
}

// Usage example:
// <Card
//   title="Documentation"
//   href="https://turbo.build/repo/docs"
//   icon={<DocumentIcon className="ui-h-5 ui-w-5" />}
// >
//   Find in-depth information about Turborepo features and API.
// </Card>
