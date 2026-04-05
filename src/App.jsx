import { useState, useEffect, useCallback } from 'react'
import { ThemeProvider, CssBaseline, Box } from '@mui/material'
import { darkTheme, lightTheme } from './theme'
import { NAV_ITEMS } from './data'

import ParticleCanvas from './components/ParticleCanvas'
import Navbar        from './components/Navbar'
import Hero          from './components/Hero'
import About         from './components/About'
import Skills        from './components/Skills'
import Experience    from './components/Experience'
import Projects      from './components/Projects'
import Contact       from './components/Contact'
import Footer        from './components/Footer'
import BackToTop     from './components/BackToTop'

export default function App() {
  const [dark, setDark]               = useState(true)
  const [activeSection, setActiveSection] = useState('Home')

  // ── Cursor glow ────────────────────────────────────────────
  useEffect(() => {
    let glow = document.querySelector('.cursor-glow')
    if (!glow) {
      glow = document.createElement('div')
      glow.className = 'cursor-glow'
      document.body.appendChild(glow)
    }
    const move = e => {
      glow.style.left = e.clientX - 10 + 'px'
      glow.style.top  = e.clientY - 10 + 'px'
      glow.style.background = dark
        ? 'radial-gradient(circle, rgba(0,229,255,0.85), transparent)'
        : 'radial-gradient(circle, rgba(124,77,255,0.7), transparent)'
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [dark])

  // ── Active section on scroll ───────────────────────────────
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 130
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_ITEMS[i].toLowerCase())
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(NAV_ITEMS[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // ── Navigate to section ────────────────────────────────────
  const navigateTo = useCallback(id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  const theme = dark ? darkTheme : lightTheme

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* ── Fixed background layer ── */}
      <Box
        sx={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          background: dark
            ? 'radial-gradient(ellipse at 15% 15%, rgba(0,70,110,0.45) 0%, transparent 52%), radial-gradient(ellipse at 85% 85%, rgba(60,0,130,0.42) 0%, transparent 52%)'
            : 'radial-gradient(ellipse at 15% 15%, rgba(173,216,255,0.65) 0%, transparent 52%), radial-gradient(ellipse at 85% 85%, rgba(200,180,255,0.55) 0%, transparent 52%)',
          bgcolor: 'background.default',
          transition: 'background 0.5s ease',
        }}
      />

      {/* ── Particle network ── */}
      <ParticleCanvas dark={dark} />

      {/* ── Navigation ── */}
      <Navbar
        dark={dark}
        onToggleTheme={() => setDark(d => !d)}
        activeSection={activeSection}
        onNavigate={navigateTo}
      />

      {/* ── Page content ── */}
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Hero       dark={dark} onNavigate={navigateTo} />
        <About      dark={dark} />
        <Skills     dark={dark} />
        <Experience dark={dark} />
        <Projects   dark={dark} />
        <Contact    dark={dark} />
        <Footer     dark={dark} />
      </Box>

      {/* ── Back to top ── */}
      <BackToTop />
    </ThemeProvider>
  )
}
