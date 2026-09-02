import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { DEFAULT_LOCALE, LOCALES, ui, type Locale } from '../content'

interface I18nValue {
  locale: Locale
  /** diccionario de UI para el idioma activo */
  t: (typeof ui)[Locale]
  setLocale: (l: Locale) => void
  toggle: () => void
  /** helper para campos { es, en } dentro de datos */
  pick: <T>(record: Record<Locale, T>) => T
}

const I18nContext = createContext<I18nValue | null>(null)
const STORAGE_KEY = 'broa:locale'

function readInitial(): Locale {
  if (typeof window === 'undefined') return DEFAULT_LOCALE
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored && LOCALES.includes(stored as Locale)) return stored as Locale
  const nav = window.navigator.language.slice(0, 2).toLowerCase()
  return nav === 'en' ? 'en' : DEFAULT_LOCALE
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readInitial)

  useEffect(() => {
    document.documentElement.lang = locale
    window.localStorage.setItem(STORAGE_KEY, locale)
  }, [locale])

  const setLocale = useCallback((l: Locale) => setLocaleState(l), [])
  const toggle = useCallback(
    () => setLocaleState((l) => (l === 'es' ? 'en' : 'es')),
    [],
  )

  const value = useMemo<I18nValue>(
    () => ({
      locale,
      t: ui[locale],
      setLocale,
      toggle,
      pick: (record) => record[locale],
    }),
    [locale, setLocale, toggle],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n debe usarse dentro de <I18nProvider>')
  return ctx
}
