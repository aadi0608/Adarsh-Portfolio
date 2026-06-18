import { useState, useEffect, useRef } from 'react'
import { Box, Container, Grid, Typography, Button } from '@mui/material'
import { motion, useInView, useAnimation } from 'framer-motion'
import { useTypedText } from '../hooks/useTypedText'
import { PERSONAL, STATS, TYPED_ROLES } from '../data'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
}

function AnimatedCounter({ value, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const num = parseFloat(value)

  useEffect(() => {
    if (!inView) return
    const duration = 2000
    const steps = 60
    const increment = num / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= num) {
        setCount(num)
        clearInterval(timer)
      } else {
        setCount(current)
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [inView, num])

  return <span ref={ref}>{inView ? count.toFixed(value.includes('.') ? 1 : 0) : '0'}{suffix}</span>
}

function MagneticButton({ children, sx = {}, ...props }) {
  const ref = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouse = e => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setPosition({ x: x * 0.3, y: y * 0.3 })
  }

  const reset = () => setPosition({ x: 0, y: 0 })

  return (
    <Box
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      sx={{ display: 'inline-flex' }}
    >
      <motion.div
        animate={{ x: position.x, y: position.y }}
        transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      >
        <Button sx={sx} {...props}>
          {children}
        </Button>
      </motion.div>
    </Box>
  )
}

export default function Hero({ dark, onNavigate }) {
  const typed = useTypedText(TYPED_ROLES)
  const accent = dark ? '#00e5ff' : '#7c4dff'
  const accent2 = dark ? '#7c4dff' : '#ff4081'

  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) controls.start('visible')
  }, [inView, controls])

  const FLOAT_BADGES = [
    { label: '⚛️  React',      top: '6%',  left: '-8%',  color: '#61dafb' },
    { label: '📱  Native',     top: '74%', left: '-10%', color: '#00d8ff' },
    { label: '🔷  TS',         top: '3%',  right: '-6%', color: '#3178c6' },
    { label: '🐳  Docker',     top: '76%', right: '-8%', color: '#2496ed' },
  ]

  return (
    <Box
      id="home"
      ref={ref}
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        pt: 8,
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <motion.div variants={containerVariants} initial="hidden" animate={controls}>
              <Box component={motion.div} variants={itemVariants}>
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
              </Box>

              <Box component={motion.div} variants={itemVariants}>
                <Typography
                  variant="h1"
                  sx={{ fontSize: { xs: '2.8rem', md: '4.6rem' }, lineHeight: 1.08, mb: 1 }}
                >
                  Adarsh{' '}
                  <Box
                    component="span"
                    className="shimmer-text"
                    sx={{
                      background: 'linear-gradient(90deg, #00e5ff, #7c4dff, #ff4081, #00e5ff)',
                      backgroundSize: '200% auto',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      animation: 'shimmerText 4s linear infinite',
                      fontFamily: "'Syne', sans-serif",
                    }}
                  >
                    Tiwari
                  </Box>
                </Typography>
              </Box>

              <Box component={motion.div} variants={itemVariants}>
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
                  <Box
                    component="span"
                    sx={{
                      background: 'linear-gradient(135deg, #00e5ff 0%, #7c4dff 55%, #ff4081 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      fontFamily: 'Syne, sans-serif',
                      fontWeight: 700,
                    }}
                  >
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
              </Box>

              <Box component={motion.div} variants={itemVariants}>
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
              </Box>

              <Box component={motion.div} variants={itemVariants}>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <MagneticButton
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
                  </MagneticButton>
                  <MagneticButton
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
                  </MagneticButton>
                </Box>
              </Box>

              <Box component={motion.div} variants={itemVariants}>
                <Box sx={{ display: 'flex', gap: { xs: 3, sm: 5 }, mt: 5 }}>
                  {STATS.map(s => (
                    <Box key={s.label} sx={{ textAlign: 'center' }}>
                      <Typography
                        sx={{
                          fontFamily: 'Syne',
                          fontWeight: 800,
                          fontSize: '2rem',
                          background: 'linear-gradient(135deg, #00e5ff, #7c4dff)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          lineHeight: 1,
                        }}
                      >
                        <AnimatedCounter value={s.value} suffix={s.label === 'Years Exp.' ? '+' : s.label === 'Technologies' ? '+' : '+'} />
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
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, type: 'spring', stiffness: 60, delay: 0.3 }}
            >
              <Box sx={{ position: 'relative', width: 320, height: 320 }}>
                <Box
                  component={motion.div}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
                  sx={{
                    position: 'absolute',
                    inset: -22,
                    borderRadius: '50%',
                    border: `2px dashed ${accent}35`,
                    boxShadow: `0 0 40px ${accent}0a`,
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

                <Box
                  component={motion.div}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
                  sx={{
                    position: 'absolute',
                    inset: 12,
                    borderRadius: '50%',
                    border: `1px solid ${accent2}28`,
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

                <Box
                  className="float-anim"
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
                    boxShadow: `inset 0 0 60px ${accent}0a, 0 0 50px ${accent}10`,
                  }}
                >
                  <Typography sx={{
                    fontSize: '6.5rem',
                    filter: `drop-shadow(0 0 22px ${accent}80)`,
                    userSelect: 'none',
                  }}>
                    👨‍💻
                  </Typography>
                </Box>

                {FLOAT_BADGES.map((b, i) => (
                  <Box
                    key={i}
                    component={motion.div}
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 4.5 + i * 0.8,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: i * 0.7,
                    }}
                    sx={{
                      position: 'absolute',
                      top: b.top,
                      left: b.left,
                      right: b.right,
                      background: dark
                        ? 'rgba(10,25,50,0.65)'
                        : 'rgba(255,255,255,0.7)',
                      border: `1px solid ${b.color}40`,
                      backdropFilter: 'blur(10px)',
                      borderRadius: 2,
                      px: 1.5,
                      py: 0.6,
                      fontSize: '0.74rem',
                      fontWeight: 600,
                      color: b.color,
                      whiteSpace: 'nowrap',
                      boxShadow: `0 4px 18px ${b.color}20`,
                    }}
                  >
                    {b.label}
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: { xs: 5, md: 7 } }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.8 }}>
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
                  component={motion.div}
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
                  sx={{
                    width: 3,
                    height: 7,
                    borderRadius: 2,
                    background: accent,
                    boxShadow: `0 0 6px ${accent}`,
                  }}
                />
              </Box>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  )
}
