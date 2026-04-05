import { useState, useEffect } from 'react'
import {
  AppBar, Toolbar, Typography, Box, IconButton,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { NAV_ITEMS } from '../data'

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
          ? scrolled ? 'rgba(4,11,20,0.85)' : 'rgba(4,11,20,0.5)'
          : scrolled ? 'rgba(240,244,255,0.88)' : 'rgba(240,244,255,0.5)',
        backdropFilter: 'blur(20px)',
        borderBottom: `1px solid ${dark ? 'rgba(0,229,255,0.08)' : 'rgba(124,77,255,0.1)'}`,
        transition: 'background 0.4s ease',
        zIndex: 100,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 6 } }}>
        {/* Logo */}
        <Typography
          onClick={() => onNavigate('home')}
          sx={{
            fontFamily: 'Syne',
            fontWeight: 800,
            fontSize: '1.5rem',
            background: 'linear-gradient(90deg, #00e5ff, #7c4dff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            cursor: 'pointer',
            userSelect: 'none',
          }}
        >
          AT.
        </Typography>

        {/* Desktop nav */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3.5, alignItems: 'center' }}>
          {NAV_ITEMS.map(item => (
            <Box
              key={item}
              onClick={() => onNavigate(item.toLowerCase())}
              sx={{
                position: 'relative',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: 500,
                letterSpacing: '0.3px',
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
                },
                '&:hover::after': { width: '100%' },
              }}
            >
              {item}
            </Box>
          ))}
        </Box>

        {/* Right side */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          {/* Theme toggle pill */}
          <Box
            onClick={onToggleTheme}
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
                ? '0 0 14px rgba(0,229,255,0.4)'
                : '0 0 14px rgba(124,77,255,0.35)',
              flexShrink: 0,
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: 3,
                left: dark ? 'calc(100% - 22px)' : 3,
                width: 22,
                height: 22,
                borderRadius: '50%',
                background: '#fff',
                transition: 'left 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.65rem',
              }}
            >
              {dark ? '🌙' : '☀️'}
            </Box>
          </Box>

          {/* Mobile menu button */}
          <IconButton
            sx={{ display: { md: 'none' }, color: accent }}
            onClick={() => setMobileOpen(o => !o)}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Box>
      </Toolbar>

      {/* Mobile menu */}
      {mobileOpen && (
        <Box
          sx={{
            display: { md: 'none' },
            background: dark
              ? 'rgba(4,11,20,0.97)'
              : 'rgba(240,244,255,0.97)',
            backdropFilter: 'blur(20px)',
            borderTop: `1px solid ${dark ? 'rgba(0,229,255,0.1)' : 'rgba(124,77,255,0.1)'}`,
            px: 3,
            pb: 2,
          }}
        >
          {NAV_ITEMS.map((item, i) => (
            <Box
              key={item}
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
      )}
    </AppBar>
  )
}
