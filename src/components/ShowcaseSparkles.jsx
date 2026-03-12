import { SparklesCore } from "@/components/ui/sparkles"

export function ShowcaseSparkles() {
  return (
    <div className="showcase-sparkles" aria-hidden="true">
      <div className="showcase-sparkles-line showcase-sparkles-line-soft" />
      <div className="showcase-sparkles-line showcase-sparkles-line-main" />
      <div className="showcase-sparkles-line showcase-sparkles-line-accent-soft" />
      <div className="showcase-sparkles-line showcase-sparkles-line-accent" />

      <SparklesCore
        background="transparent"
        minSize={0.4}
        maxSize={1}
        particleDensity={1200}
        className="showcase-sparkles-canvas"
        particleColor="#FFFFFF"
      />

      <div className="showcase-sparkles-mask" />
    </div>
  )
}
