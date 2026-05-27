import { AppHeaderSection } from "@/components/app/sections/AppHeaderSection"
import { CompatSection } from "@/components/app/sections/CompatSection"
import { FeatureFaqSection } from "@/components/app/sections/FeatureFaqSection"
import { HeroSection } from "@/components/app/sections/HeroSection"

export function AppPageSections({
  appRef,
  openFaqIndex,
  onToggleFaq,
}) {
  return (
    <main className="app" ref={appRef}>
      <AppHeaderSection />
      <HeroSection />
      <CompatSection />
      <FeatureFaqSection
        openFaqIndex={openFaqIndex}
        onToggleFaq={onToggleFaq}
      />
    </main>
  )
}
