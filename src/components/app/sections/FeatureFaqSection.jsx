import LaserFlow from "@/components/LaserFlow"
import { HeroHeadlineBlock } from "@/components/app/HeroHeadlineBlock"
import {
  filingLinks,
} from "@/components/app/constants"
import { useI18n } from "@/i18n/context"
import { getFilingLabelVariants } from "@/lib/filingVariants"
import {
  FaqChevronDownIcon,
  FaqChevronUpIcon,
} from "@/components/app/AppPageSectionIcons"
import {
  FeaturePreviewGlowSvg,
} from "@/components/app/AppPageSectionSvgs"

function renderFaqAnswer(item) {
  let parts = [item.answer]

  if (item.linkText) {
    parts = parts.flatMap((part) => {
      if (typeof part !== "string") return [part]
      const [before, ...rest] = part.split(item.linkText)
      if (rest.length === 0) return [part]
      return [
        before,
        <a
          key="link"
          href={item.linkHref ?? filingLinks.faqCompatList}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#3B82F6", textDecoration: "underline" }}
        >
          {item.linkText}
        </a>,
        rest.join(item.linkText),
      ]
    })
  }

  if (item.boldTexts) {
    for (let i = 0; i < item.boldTexts.length; i++) {
      const boldText = item.boldTexts[i]
      parts = parts.flatMap((part) => {
        if (typeof part !== "string") return [part]
        const [before, ...rest] = part.split(boldText)
        if (rest.length === 0) return [part]
        return [
          before,
          <strong key={`bold-${i}`} style={{ color: "#fff" }}>{boldText}</strong>,
          rest.join(boldText),
        ]
      })
    }
  }

  if (parts.length === 1 && typeof parts[0] === "string") {
    return parts[0]
  }

  return <>{parts}</>
}

function renderFilingLabel(filing) {
  const labelVariants = getFilingLabelVariants(filing.linkKey, filing.label)

  if (labelVariants.length === 1) {
    return labelVariants[0].label
  }

  return labelVariants.map(({ variant, label }) => (
    <span key={variant} data-filing-label-variant={variant}>
      {label}
    </span>
  ))
}

export function FeatureFaqSection({ openFaqIndex, onToggleFaq }) {
  const { t, locale } = useI18n()
  const faqFooter = t.faq.footer
  const showDomesticFooter = t.showDomesticFooter

  return (
    <section className="feature-preview-section" id="feature-preview">
      <div className="feature-preview-glow-wrapper">
        <FeaturePreviewGlowSvg />
      </div>
      <div className="feature-preview-content">
        <section className="faq-section">
          <h2 className="faq-title">{t.faq.title}</h2>
          <div className="faq-list">
            {t.faqItems.map((item, index) => {
              const isOpen = openFaqIndex === index
              return (
                <article key={index} className={`faq-item ${isOpen ? "is-open" : ""}`}>
                  <button
                    className="faq-item-trigger"
                    type="button"
                    onClick={() => onToggleFaq(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-item-icon" aria-hidden="true">
                      {isOpen ? (
                        <FaqChevronUpIcon />
                      ) : (
                        <FaqChevronDownIcon />
                      )}
                    </span>
                    <span className="faq-item-question">{item.question}</span>
                  </button>
                  {isOpen && (
                    <div className="faq-item-content">
                      <p className="faq-item-answer">{renderFaqAnswer(item)}</p>
                    </div>
                  )}
                </article>
              )
            })}
          </div>
          <div className="faq-bottom-panel">
            <LaserFlow
              className="faq-bottom-panel-laser"
              color="#B2FCFF"
              horizontalSizing={1.6}
              verticalSizing={3.7}
              horizontalBeamOffset={0}
              verticalBeamOffset={-0.5}
              wispDensity={3.9}
              wispSpeed={40}
              wispIntensity={5}
              flowSpeed={0.77}
              flowStrength={0.4}
              fogIntensity={0.75}
              fogScale={0.3}
              fogFallSpeed={0.6}
              decay={1.1}
              falloffStart={1.2}
            />
            {showDomesticFooter && (
              <>
                <p className="faq-bottom-panel-copyright">{faqFooter.copyright}</p>
                <div className="faq-bottom-panel-footer">
                  <div className="faq-bottom-panel-footer-row">
                    {faqFooter.filings.map((filing, index) => (
                      <div key={filing.label} style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                        {filing.showIcon && (
                          <img src="/wenhuajingying 1.png" alt="" className="faq-bottom-panel-footer-icon" />
                        )}
                        <a
                          href={filingLinks[filing.linkKey]}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "inherit", textDecoration: "none" }}
                        >
                          {renderFilingLabel(filing)}
                        </a>
                        {index < faqFooter.filings.length - 1 && <span className="faq-bottom-panel-footer-sep" />}
                      </div>
                    ))}
                  </div>
                  <div className="faq-bottom-panel-footer-row">
                    <span>{faqFooter.company}</span>
                    <span className="faq-bottom-panel-footer-sep" />
                    <span>{faqFooter.address}</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </section>
      </div>
    </section>
  )
}
