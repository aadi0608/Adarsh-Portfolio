import { useState, useEffect } from 'react'
import {
  AppBar, Toolbar, Typography, Box, IconButton,
} from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { NAV_ITEMS } from '../data'

const navItemVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: i => ({
    y: 0,
    opacity: 1,
    transition: { delay: i * 0.05, type: 'spring', stiffness: 120 },
  }),
}

const mobileItemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: i => ({
    x: 0,
    opacity: 1,
    transition: { delay: i * 0.05 },
  }),
  exit: { x: -20, opacity: 0 },
}

export default function Navbar({ dark, onToggleTheme, activeSection, onNavigate }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const accent = dark ? '#00e5ff' : '#7c4dff'

  return (
    <AppBar
      elevation={0}
      sx={{
        background: dark
          ? scrolled ? 'rgba(3,8,17,0.92)' : 'rgba(3,8,17,0.3)'
          : scrolled ? 'rgba(240,244,255,0.92)' : 'rgba(240,244,255,0.3)',
        backdropFilter: 'blur(24px)',
        borderBottom: `1px solid ${dark ? 'rgba(0,229,255,0.08)' : 'rgba(124,77,255,0.1)'}`,
        transition: 'background 0.5s ease, border-color 0.3s ease',
        zIndex: 100,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 6 } }}>
        <Typography
          onClick={() => onNavigate('home')}
          sx={{
            fontFamily: 'Orbitron, Syne, sans-serif',
            fontWeight: 800,
            fontSize: '1.5rem',
            background: 'linear-gradient(90deg, #00e5ff, #7c4dff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            cursor: 'pointer',
            userSelect: 'none',
            letterSpacing: '2px',
          }}
        >
          AT.
        </Typography>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4, alignItems: 'center' }}>
          {NAV_ITEMS.map((item, i) => (
            <Box
              component={motion.div}
              key={item}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
              onClick={() => onNavigate(item.toLowerCase())}
              sx={{
                position: 'relative',
                cursor: 'pointer',
                fontSize: '0.88rem',
                fontWeight: 500,
                letterSpacing: '0.5px',
                color: activeSection === item ? accent : 'text.secondary',
                transition: 'color 0.3s',
                '&:hover': { color: accent },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -3, left: 0,
                  width: activeSection === item ? '100%' : '0%',
                  height: '2px',
                  background: `linear-gradient(90deg, #00e5ff, #7c4dff)`,
                  transition: 'width 0.3s ease',
                  borderRadius: '2px',
                  boxShadow: activeSection === item ? `0 0 8px ${accent}` : 'none',
                },
                '&:hover::after': { width: '100%' },
              }}
            >
              {item}
            </Box>
          ))}
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Box
            component={motion.div}
            onClick={onToggleTheme}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            sx={{
              width: 54,
              height: 28,
              borderRadius: 14,
              background: dark
                ? 'linear-gradient(90deg,#00e5ff,#7c4dff)'
                : 'linear-gradient(90deg,#7c4dff,#ff4081)',
              position: 'relative',
              cursor: 'pointer',
              transition: 'background 0.4s',
              boxShadow: dark
                ? '0 0 14px rgba(0,229,255,0.4), inset 0 0 4px rgba(255,255,255,0.2)'
                : '0 0 14px rgba(124,77,255,0.35), inset 0 0 4px rgba(255,255,255,0.2)',
              flexShrink: 0,
            }}
          >
            <Box
              component={motion.div}
              layout
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              sx={{
                position: 'absolute',
                top: 3,
                left: dark ? 'calc(100% - 22px)' : 3,
                width: 22,
                height: 22,
                borderRadius: '50%',
                background: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.65rem',
              }}
            >
              {dark ? '🌙' : '☀️'}
            </Box>
          </Box>

          <IconButton
            sx={{ display: { md: 'none' }, color: accent }}
            onClick={() => setMobileOpen(o => !o)}
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div key="close" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}>
                  <CloseIcon />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }}>
                  <MenuIcon />
                </motion.div>
              )}
            </AnimatePresence>
          </IconButton>
        </Box>
      </Toolbar>

      <AnimatePresence>
        {mobileOpen && (
          <Box
            component={motion.div}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            sx={{
              display: { md: 'none' },
              overflow: 'hidden',
              background: dark
                ? 'rgba(3,8,17,0.98)'
                : 'rgba(240,244,255,0.98)',
              backdropFilter: 'blur(24px)',
              borderTop: `1px solid ${dark ? 'rgba(0,229,255,0.1)' : 'rgba(124,77,255,0.1)'}`,
            }}
          >
            <Box sx={{ px: 3, pb: 2 }}>
              {NAV_ITEMS.map((item, i) => (
                <Box
                  component={motion.div}
                  key={item}
                  custom={i}
                  variants={mobileItemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  onClick={() => {
                    onNavigate(item.toLowerCase())
                    setMobileOpen(false)
                  }}
                  sx={{
                    py: 1.4,
                    fontWeight: 500,
                    cursor: 'pointer',
                    color: activeSection === item ? accent : 'text.primary',
                    borderBottom:
                      i < NAV_ITEMS.length - 1
                        ? `1px solid ${dark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.06)'}`
                        : 'none',
                    transition: 'all 0.2s',
                    '&:hover': { color: accent, pl: 1 },
                  }}
                >
                  {item}
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </AnimatePresence>
    </AppBar>
  )
}
