import { useState } from "react"
import { usePageZoom } from "@/components/app/usePageZoom"
import { AppPageSections } from "@/components/app/AppPageSections"
import { I18nProvider } from "@/i18n/context"
import { getDirectDownloadUrl } from "@/lib/downloadApi"

export default function AppPageContent({ locale = "zh" }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0)
  const appRef = usePageZoom()

  const handleDownload = () => {
    const url = getDirectDownloadUrl(locale)
    if (typeof window !== "undefined") {
      window.location.href = url
    }
  }

  return (
    <I18nProvider locale={locale}>
      <AppPageSections
        appRef={appRef}
        openFaqIndex={openFaqIndex}
        onOpenDownload={handleDownload}
        onToggleFaq={setOpenFaqIndex}
      />
    </I18nProvider>
  )
}
