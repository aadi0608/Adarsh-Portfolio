import { useState, useEffect, useCallback } from 'react'
import { ThemeProvider, CssBaseline, Box } from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'
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

  useEffect(() => {
    let glow = document.querySelector('.cursor-glow')
    if (!glow) {
      glow = document.createElement('div')
      glow.className = 'cursor-glow'
      document.body.appendChild(glow)
    }
    const move = e => {
      glow.style.left = e.clientX - 15 + 'px'
      glow.style.top  = e.clientY - 15 + 'px'
      glow.style.background = dark
        ? 'radial-gradient(circle, rgba(0,229,255,0.5), rgba(124,77,255,0.2), transparent)'
        : 'radial-gradient(circle, rgba(124,77,255,0.4), rgba(0,180,216,0.2), transparent)'
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [dark])

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

  const navigateTo = useCallback(id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  const theme = dark ? darkTheme : lightTheme

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box
        component={motion.div}
        animate={{
          background: dark
            ? 'radial-gradient(ellipse at 20% 20%, rgba(0,70,130,0.5) 0%, transparent 55%), radial-gradient(ellipse at 80% 80%, rgba(60,0,130,0.45) 0%, transparent 55%), radial-gradient(ellipse at 50% 50%, rgba(0,229,255,0.03) 0%, transparent 70%)'
            : 'radial-gradient(ellipse at 20% 20%, rgba(173,216,255,0.7) 0%, transparent 55%), radial-gradient(ellipse at 80% 80%, rgba(200,180,255,0.6) 0%, transparent 55%)',
        }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        sx={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          bgcolor: 'background.default',
        }}
      />

      <ParticleCanvas dark={dark} />

      <Navbar
        dark={dark}
        onToggleTheme={() => setDark(d => !d)}
        activeSection={activeSection}
        onNavigate={navigateTo}
      />

      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Hero       dark={dark} onNavigate={navigateTo} />
        <About      dark={dark} />
        <Skills     dark={dark} />
        <Experience dark={dark} />
        <Projects   dark={dark} />
        <Contact    dark={dark} />
        <Footer     dark={dark} />
      </Box>

      <BackToTop />
    </ThemeProvider>
  )
}
