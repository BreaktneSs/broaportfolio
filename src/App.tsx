import { I18nProvider } from './providers/i18n'
import { ThemeProvider } from './providers/theme'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import { Aurora } from './components/Aurora'
import { GlowCursor } from './components/GlowCursor'
import { ScrollProgress } from './components/ScrollProgress'
import { Navbar } from './components/Navbar'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Experience } from './sections/Experience'
import { Work } from './sections/Work'
import { Skills } from './sections/Skills'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'

function Shell() {
  useSmoothScroll()

  return (
    <div className="grain relative">
      <Aurora />
      <GlowCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Work />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <I18nProvider>
        <Shell />
      </I18nProvider>
    </ThemeProvider>
  )
}
