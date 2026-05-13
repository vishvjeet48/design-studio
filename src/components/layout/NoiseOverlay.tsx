export function NoiseOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-10 opacity-[0.35] mix-blend-multiply dark:opacity-[0.22] dark:mix-blend-overlay grain"
    />
  )
}
