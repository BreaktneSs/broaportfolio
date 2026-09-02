import { useI18n } from '../providers/i18n'
import { profile } from '../content'

export function Footer() {
  const { t } = useI18n()
  const year = new Date().getFullYear()

  return (
    <footer className="shell border-t border-[rgb(var(--hairline)/0.12)] py-10">
      <div className="flex flex-col items-center justify-between gap-4 text-xs text-[rgb(var(--text-faint))] sm:flex-row">
        <p className="font-mono">
          © {year} {profile.name}. {t.footer.rights}
        </p>
        <p className="font-mono">{t.footer.built}</p>
      </div>
    </footer>
  )
}
