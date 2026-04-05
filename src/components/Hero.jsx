import { Box, Container, Grid, Typography, Button } from '@mui/material'
import { useTypedText } from '../hooks/useTypedText'
import { PERSONAL, STATS, TYPED_ROLES } from '../data'
import Reveal from './Reveal'

export default function Hero({ dark, onNavigate }) {
  const typed = useTypedText(TYPED_ROLES)
  const accent = dark ? '#00e5ff' : '#7c4dff'
  const accent2 = dark ? '#7c4dff' : '#ff4081'

  const glassBg = dark
    ? 'rgba(10,25,50,0.55)'
    : 'rgba(255,255,255,0.55)'
  const glassBorder = dark
    ? '1px solid rgba(0,229,255,0.15)'
    : '1px solid rgba(124,77,255,0.15)'

  const FLOAT_BADGES = [
    { label: '⚛️  React',      top: '8%',  left: '-9%'  },
    { label: '📱  Native',     top: '76%', left: '-10%' },
    { label: '🔷  TS',         top: '5%',  right: '-6%' },
    { label: '🐳  Docker',     top: '78%', right: '-8%' },
  ]

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        pt: 8,
        position: 'relative',
        zIndex: 1,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* ── Left column ── */}
          <Grid item xs={12} md={7}>
            <Reveal>
              <Typography
                sx={{
                  color: accent,
                  fontWeight: 600,
                  fontSize: '0.78rem',
                  letterSpacing: 3,
                  textTransform: 'uppercase',
                  mb: 1,
                }}
              >
                👋 Hello, I'm
              </Typography>
            </Reveal>

            <Reveal delay={0.1}>
              <Typography
                variant="h1"
                sx={{ fontSize: { xs: '2.8rem', md: '4.6rem' }, lineHeight: 1.08, mb: 1 }}
              >
                Adarsh{' '}
                <Box component="span" className="shimmer-text">
                  Tiwari
                </Box>
              </Typography>
            </Reveal>

            <Reveal delay={0.2}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: '1.3rem', md: '1.85rem' },
                  fontWeight: 400,
                  mb: 3,
                  color: 'text.secondary',
                  minHeight: '2.4rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5,
                }}
              >
                <Box component="span" className="gradient-text" sx={{ fontFamily: 'Syne', fontWeight: 700 }}>
                  {typed}
                </Box>
                <Box
                  component="span"
                  sx={{
                    display: 'inline-block',
                    width: 3,
                    height: '1em',
                    bgcolor: accent,
                    animation: 'blink 1s step-end infinite',
                    borderRadius: 0.5,
                    verticalAlign: 'middle',
                  }}
                />
              </Typography>
            </Reveal>

            <Reveal delay={0.3}>
              <Typography
                sx={{
                  fontSize: '1.05rem',
                  lineHeight: 1.85,
                  color: 'text.secondary',
                  mb: 4,
                  maxWidth: 520,
                }}
              >
                Software Engineer at{' '}
                <Box component="span" sx={{ color: accent, fontWeight: 600 }}>
                  Automaton AI Infosystem
                </Box>{' '}
                crafting production-ready web &amp; mobile Applications with React, React Native,
                TypeScript, JavaScript and cutting-edge technologies.
              </Typography>
            </Reveal>

            <Reveal delay={0.4}>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => onNavigate('projects')}
                  sx={{
                    background: 'linear-gradient(135deg,#00e5ff,#7c4dff)',
                    color: '#fff',
                    px: 4,
                    py: 1.5,
                    fontSize: '0.95rem',
                    boxShadow: '0 8px 30px rgba(0,229,255,0.3)',
                    '&:hover': {
                      background: 'linear-gradient(135deg,#7c4dff,#00e5ff)',
                      boxShadow: '0 14px 40px rgba(0,229,255,0.5)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s',
                  }}
                >
                  View Projects ✦
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => onNavigate('contact')}
                  sx={{
                    borderColor: accent,
                    color: accent,
                    px: 4,
                    py: 1.5,
                    fontSize: '0.95rem',
                    '&:hover': {
                      background: `${accent}12`,
                      transform: 'translateY(-2px)',
                      boxShadow: `0 8px 28px ${accent}28`,
                    },
                    transition: 'all 0.3s',
                  }}
                >
                  Get In Touch
                </Button>
              </Box>
            </Reveal>

            {/* Stats */}
            <Reveal delay={0.5}>
              <Box sx={{ display: 'flex', gap: { xs: 3, sm: 5 }, mt: 5 }}>
                {STATS.map(s => (
                  <Box key={s.label} sx={{ textAlign: 'center' }}>
                    <Typography
                      sx={{
                        fontFamily: 'Syne',
                        fontWeight: 800,
                        fontSize: '2rem',
                        color: accent,
                        lineHeight: 1,
                      }}
                    >
                      {s.value}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '0.7rem',
                        color: 'text.secondary',
                        letterSpacing: 1,
                        textTransform: 'uppercase',
                        mt: 0.3,
                      }}
                    >
                      {s.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Reveal>
          </Grid>

          {/* ── Right column – 3D orb ── */}
          <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Reveal delay={0.25} direction="right">
              <Box sx={{ position: 'relative', width: 320, height: 320 }}>
                {/* Outer orbit ring */}
                <Box
                  sx={{
                    position: 'absolute',
                    inset: -22,
                    borderRadius: '50%',
                    border: `2px dashed ${accent}35`,
                    animation: 'orbit 22s linear infinite',
                  }}
                >
                  <Box
                    sx={{
                      width: 14,
                      height: 14,
                      borderRadius: '50%',
                      background: accent,
                      boxShadow: `0 0 18px ${accent}`,
                      position: 'absolute',
                      top: 8,
                      left: '50%',
                      transform: 'translateX(-50%)',
                    }}
                  />
                </Box>

                {/* Inner orbit ring */}
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 12,
                    borderRadius: '50%',
                    border: `1px solid ${accent2}28`,
                    animation: 'orbitReverse 14s linear infinite',
                  }}
                >
                  <Box
                    sx={{
                      width: 9,
                      height: 9,
                      borderRadius: '50%',
                      background: accent2,
                      boxShadow: `0 0 12px ${accent2}`,
                      position: 'absolute',
                      bottom: 12,
                      right: 12,
                    }}
                  />
                </Box>

                {/* Main avatar orb */}
                <Box
                  className="float-anim pulse-glow"
                  sx={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    background: dark
                      ? 'linear-gradient(135deg,rgba(0,229,255,0.12),rgba(124,77,255,0.22))'
                      : 'linear-gradient(135deg,rgba(124,77,255,0.1),rgba(0,229,255,0.14))',
                    border: `2px solid ${accent}38`,
                    backdropFilter: 'blur(10px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `inset 0 0 60px ${accent}0a`,
                  }}
                >
                  <Typography sx={{ fontSize: '6.5rem', filter: `drop-shadow(0 0 22px ${accent}80)` }}>
                    👨‍💻
                  </Typography>
                </Box>

                {/* Floating tech badges */}
                {FLOAT_BADGES.map((b, i) => (
                  <Box
                    key={i}
                    sx={{
                      position: 'absolute',
                      ...b,
                      background: glassBg,
                      border: glassBorder,
                      backdropFilter: 'blur(10px)',
                      borderRadius: 2,
                      px: 1.5,
                      py: 0.6,
                      fontSize: '0.74rem',
                      fontWeight: 600,
                      color: accent,
                      whiteSpace: 'nowrap',
                      boxShadow: `0 4px 18px ${accent}18`,
                      animation: `float ${4.5 + i * 0.8}s ease-in-out infinite`,
                      animationDelay: `${i * 0.7}s`,
                    }}
                  >
                    {b.label}
                  </Box>
                ))}
              </Box>
            </Reveal>
          </Grid>
        </Grid>

        {/* Scroll hint */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: { xs: 5, md: 7 } }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.8, opacity: 0.4 }}>
            <Typography sx={{ fontSize: '0.65rem', letterSpacing: 2.5, textTransform: 'uppercase' }}>
              Scroll
            </Typography>
            <Box
              sx={{
                width: 22,
                height: 36,
                borderRadius: 11,
                border: `2px solid ${accent}`,
                display: 'flex',
                justifyContent: 'center',
                pt: 0.8,
              }}
            >
              <Box
                sx={{
                  width: 3,
                  height: 7,
                  borderRadius: 2,
                  background: accent,
                  animation: 'float 1.4s ease-in-out infinite',
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
