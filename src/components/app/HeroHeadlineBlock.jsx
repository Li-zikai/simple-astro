import { useState, useEffect, useCallback, useRef } from "react"
import { AppleIcon } from "@/components/app/icons"
import { useI18n } from "@/i18n/context"

const MAC_WORDS = ["MacBook", "iMac", "Mac Studio", "Mac mini"]
const TYPE_SPEED = 80
const DELETE_SPEED = 50
const PAUSE_AFTER_TYPE = 1500
const PAUSE_AFTER_DELETE = 300

function useTypingAnimation() {
  const [displayed, setDisplayed] = useState(MAC_WORDS[0])
  const [isDeleting, setIsDeleting] = useState(false)
  const wordIndex = useRef(0)
  const charIndex = useRef(MAC_WORDS[0].length)

  useEffect(() => {
    let timer
    const currentWord = MAC_WORDS[wordIndex.current]

    if (!isDeleting && charIndex.current === currentWord.length) {
      // Finished typing, pause then start deleting
      timer = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE)
    } else if (isDeleting && charIndex.current === 0) {
      // Finished deleting, move to next word and start typing
      timer = setTimeout(() => {
        wordIndex.current = (wordIndex.current + 1) % MAC_WORDS.length
        setIsDeleting(false)
      }, PAUSE_AFTER_DELETE)
    } else if (isDeleting) {
      timer = setTimeout(() => {
        charIndex.current -= 1
        setDisplayed(currentWord.slice(0, charIndex.current))
      }, DELETE_SPEED)
    } else {
      timer = setTimeout(() => {
        charIndex.current += 1
        const nextWord = MAC_WORDS[wordIndex.current]
        setDisplayed(nextWord.slice(0, charIndex.current))
      }, TYPE_SPEED)
    }

    return () => clearTimeout(timer)
  }, [displayed, isDeleting])

  return displayed
}

export function HeroHeadlineBlock({ enText, zhText, subtitle, showDownloadButton = false, onDownload }) {
  const { t } = useI18n()
  const typedText = useTypingAnimation()

  return (
    <>
      <div className="hero-headline" aria-label={`${enText} ${typedText}`}>
        <span className="hero-headline-en">{enText}</span>
        <span className="hero-headline-zh hero-headline-typing">
          <span className="hero-typing-sizer" aria-hidden="true">Mac Studio</span>
          <span className="hero-typing-text">
            {typedText}
            <span className="hero-typing-cursor" aria-hidden="true">|</span>
          </span>
        </span>
      </div>
      <p className="hero-subtitle">{subtitle}</p>
      {/* {showDownloadButton && (
        <div className="hero-single-action">
          <button
            type="button"
            className="download-button-primary"
            onClick={onDownload}
          >
            <AppleIcon />
            <span className="download-button-label">{t.hero.downloadButton}</span>
          </button>
        </div>
      )} */}
    </>
  )
}
