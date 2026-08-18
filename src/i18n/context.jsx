import { createContext, useContext, useMemo } from "react"
import zh from "./zh.json"
import en from "./en.json"
import ru from "./ru.json"

const translations = { zh, en, ru }

const I18nContext = createContext(null)

export function I18nProvider({ locale = "zh", children }) {
  const t = translations[locale] || translations.zh

  const value = useMemo(() => ({ locale, t }), [locale, t])

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error("useI18n must be used within I18nProvider")
  return ctx
}
