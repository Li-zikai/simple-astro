import { useState, useEffect, useRef } from "react"
import { ShowcaseSparkles } from "@/components/ShowcaseSparkles"
import { Marquee } from "@/registry/magicui/marquee"
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"
import { FlipNumber } from "@/components/app/FlipNumber"
import { UserPopupCard } from "@/components/app/UserPopupCard"
import {
  firstRowUsers,
  secondRowUsers,
} from "@/components/app/constants"
import {
  ShowcaseAppleOutlineSvg,
} from "@/components/app/AppPageSectionSvgs"
import { HeroHeadlineBlock } from "@/components/app/HeroHeadlineBlock"
import { useI18n } from "@/i18n/context"
import { useGameCovers } from "@/components/app/constants"

export function HeroSection() {
  const { t, locale } = useI18n()
  const gameCovers = useGameCovers()
  const [heroImgLoaded, setHeroImgLoaded] = useState(false)
  const heroImgRef = useRef(null)
  const showcaseRef = useRef(null)
  const heroImageSrc = locale === "en"
    ? "/MacBook-air2.png"
    : "/MacBook-air3.png"

  useEffect(() => {
    setHeroImgLoaded(false)
    const img = heroImgRef.current
    if (img?.complete && img.naturalWidth > 0) {
      setHeroImgLoaded(true)
    }
  }, [heroImageSrc])

  useEffect(() => {
    const el = showcaseRef.current
    if (!el) return

    // 使用 getBoundingClientRect 配合 requestAnimationFrame 代替 scroll 事件
    let rafId
    const update = () => {
      const rect = el.getBoundingClientRect()
      const viewH = window.innerHeight
      // 当元素顶部在视口底部时 progress=0，到达视口顶部时 progress=1
      const progress = Math.min(1, Math.max(0, 1 - rect.top / viewH))
      const scale = 0.78 + progress * 0.22
      const rotateX = (1 - progress) * 10
      el.style.transform = `perspective(1200px) scale(${scale}) rotateX(${rotateX}deg)`
      rafId = requestAnimationFrame(update)
    }
    rafId = requestAnimationFrame(update)
    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <>
      <section className="hero" id="version-intro">
        <HeroHeadlineBlock
          enText={t.hero.headline.en}
          zhText={t.hero.headline.zh}
          subtitle={t.hero.headline.subtitle}
        />
        <div className="hero-actions">
          <a
            href={t.communityUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="download-button-secondary"
          >
            <span className="download-button-secondary-label">{t.hero.communityButton}</span>
          </a>
        </div>
        <div className="hero-showcase-outer">
          <div className="hero-showcase" ref={showcaseRef}>
            <ShowcaseSparkles />
            <div className="hero-video-container">
              {!heroImgLoaded && <div className="hero-video-skeleton" />}
              <img
                ref={heroImgRef}
                className="hero-video"
                src={heroImageSrc}
                alt={t.hero.videoPlayLabel}
                fetchPriority="high"
                loading="eager"
                decoding="async"
                width={1280}
                height={832}
                onLoad={() => setHeroImgLoaded(true)}
                onError={() => setHeroImgLoaded(true)}
                style={{ visibility: heroImgLoaded ? "visible" : "hidden" }}
              />
            </div>
          </div>
        </div>
        <div className="showcase-content">
          <h2 className="showcase-title">{t.hero.showcase.title}</h2>
          <p className="showcase-subtitle">
            {t.hero.showcase.subtitle}
          </p>
          <div className="showcase-grid">
            <div className="showcase-box-anim">
              <div className="showcase-box showcase-box-small">
                <div className="showcase-box-icon">
                  <ShowcaseAppleOutlineSvg />
                  <div className="showcase-box-text">{t.hero.showcase.cardLabel}</div>
                </div>
              </div>
            </div>
            <div className="showcase-box-anim showcase-box-anim-delay">
              <div className="showcase-box showcase-box-large">
                <div className="showcase-box-large-media">
                  <img
                    className="showcase-box-large-image"
                    src={locale === "en" ? "/hero-showcase-right-en.png" : "/hero-showcase-right.png"}
                    alt={t.hero.showcaseImageAlt}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="steam-management">
          <h2 className="steam-management-title">{t.steam.title}</h2>
          <p className="steam-management-subtitle">
            {t.steam.subtitle}
          </p>
        </div>
        <div className="user-popup-container">
          <Marquee className="user-popup-marquee" style={{ "--duration": "60s", "--gap": "24px" }}>
            {firstRowUsers.map((user, j) => (
              <UserPopupCard key={`r1-${j}`} user={user} />
            ))}
          </Marquee>
          <Marquee className="user-popup-marquee" reverse style={{ "--duration": "60s", "--gap": "24px" }}>
            {secondRowUsers.map((user, j) => (
              <UserPopupCard key={`r2-${j}`} user={user} />
            ))}
          </Marquee>
          <div className="marquee-fade-left" />
          <div className="marquee-fade-right" />
        </div>
        <div className="steam-data-text">{t.steam.syncDataTitle}</div>
        <div className="steam-data-section">
          <img className="steam-data-bg" src="/Background.png" alt="" />
          <img className="steam-data-center-img" src="/logo2.png" alt="" />
          <div className="steam-data-grid">
            <div className="steam-data-card">
              <div className="game-covers-stack">
                <AnimatedTooltip items={gameCovers} autoPlay autoInterval={2500} />
              </div>
              <span className="steam-data-card-label">{t.steam.cards.countLabel}</span>
            </div>
          </div>
          <div className="steam-data-grid-right">
            <div className="steam-data-card steam-data-card-small">
              <div className="steam-hours-card">
                <div className="steam-hours-inner">
                  <FlipNumber className="steam-hours-value" value={t.steam.cards.value} counting />
                </div>
              </div>
              <span className="steam-data-card-label">{t.steam.cards.valueLabel}</span>
            </div>
          </div>
          <div className="steam-data-grid-bottom-left">
            <div className="steam-data-card steam-data-card-small">
              <div className="steam-hours-card">
                <div className="steam-hours-inner">
                  <FlipNumber className="steam-hours-value" value={t.steam.cards.hoursValue} counting />
                </div>
              </div>
              <span className="steam-data-card-label">{t.steam.cards.hoursLabel}</span>
            </div>
          </div>
          <div className="steam-data-grid-bottom-right">
            <div className="steam-data-card steam-data-card-cloud">
              <img className="steam-cloud-icon" src="/Group 2 (6).svg" alt="" />
              <span className="steam-data-card-label">{t.steam.cards.cloudLabel}</span>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
