/** Firma de layout: franja de tres compartimentos (mañana · tarde · noche). */
export function CompartmentDivider({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`mx-auto max-w-6xl px-4 sm:px-6 ${className}`}>
      <div className="flex gap-2">
        <span className="h-1.5 w-10 rounded-full bg-morning" />
        <span className="h-1.5 w-10 rounded-full bg-afternoon" />
        <span className="h-1.5 w-10 rounded-full bg-night" />
      </div>
    </div>
  );
}
