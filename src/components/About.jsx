import { useRef } from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import { motion, useInView } from 'framer-motion'
import { PERSONAL, EDUCATION } from '../data'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const fadeUp = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 80, damping: 20 },
  },
}

const fadeLeft = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 80, damping: 20 },
  },
}

const fadeRight = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 80, damping: 20 },
  },
}

function TiltCard({ children, sx = {} }) {
  const ref = useRef(null)

  const handleMouse = e => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale3d(1.02,1.02,1.02)`
  }

  const reset = () => {
    if (ref.current) {
      ref.current.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)'
    }
  }

  return (
    <Box
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      sx={{
        transformStyle: 'preserve-3d',
        transition: 'transform 0.35s ease, box-shadow 0.35s ease',
        willChange: 'transform',
        ...sx,
      }}
    >
      {children}
    </Box>
  )
}

export default function About({ dark }) {
  const accent = dark ? '#00e5ff' : '#7c4dff'
  const accent2 = dark ? '#7c4dff' : '#ff4081'

  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, amount: 0.1 })

  const glassBg = dark ? 'rgba(10,25,50,0.6)' : 'rgba(255,255,255,0.65)'
  const glassBorder = dark
    ? '1px solid rgba(0,229,255,0.14)'
    : '1px solid rgba(124,77,255,0.14)'

  const INFO_CARDS = [
    {
      icon: '🎓',
      title: 'Education',
      sub: `${EDUCATION.university}  ·  ${EDUCATION.period}`,
      detail: `B.Tech (CSE)  ·  CGPA: ${EDUCATION.cgpa}`,
      color: '#7c4dff',
    },
    {
      icon: '🏢',
      title: 'Current Role',
      sub: PERSONAL.company,
      detail: 'Software Engineer  ·  Jan 2024 – Present',
      color: '#00e5ff',
    },
    {
      icon: '📍',
      title: 'Location',
      sub: 'Pune, India',
      detail: 'Open to Remote / Hybrid',
      color: '#ff4081',
    },
    {
      icon: '🌟',
      title: 'Focus',
      sub: 'Web & Mobile Development',
      detail: 'AI-powered applications',
      color: '#4caf50',
    },
  ]

  return (
    <Box
      id="about"
      ref={sectionRef}
      sx={{ py: 12, position: 'relative', zIndex: 1 }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: 7,
              fontSize: { xs: '2rem', md: '2.8rem' },
              '&::after': {
                content: '""',
                display: 'block',
                width: 60,
                height: 4,
                borderRadius: 2,
                background: 'linear-gradient(90deg,#00e5ff,#7c4dff)',
                mt: 1.5,
                boxShadow: '0 0 12px rgba(0,229,255,0.4)',
              },
            }}
          >
            About Me
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <TiltCard
                sx={{
                  background: glassBg,
                  border: glassBorder,
                  backdropFilter: 'blur(18px)',
                  borderRadius: 4,
                  p: 4,
                  height: '100%',
                }}
              >
                <Typography variant="h5" sx={{ mb: 2.5, color: accent }}>
                  Who Am I?
                </Typography>
                <Typography sx={{ lineHeight: 1.9, color: 'text.secondary', mb: 2 }}>
                  I'm a passionate{' '}
                  <Box component="span" sx={{ color: 'text.primary', fontWeight: 600 }}>
                    Software Engineer
                  </Box>{' '}
                  at Automaton AI Infosystem Pvt. Ltd., with 2.6+ years of
                  hands-on experience building scalable web and mobile
                  applications using{' '}
                  <Box component="span" sx={{ color: accent, fontWeight: 600 }}>React.js</Box>,{' '}
                  <Box component="span" sx={{ color: accent, fontWeight: 600 }}>React Native</Box>,{' '}
                  <Box component="span" sx={{ color: accent, fontWeight: 600 }}>JavaScript</Box>, and{' '}
                  <Box component="span" sx={{ color: accent, fontWeight: 600 }}>TypeScript</Box>.
                </Typography>
                <Typography sx={{ lineHeight: 1.9, color: 'text.secondary', mb: 2 }}>
                  With a strong foundation in{' '}
                  <Box component="span" sx={{ color: accent, fontWeight: 600 }}>TypeScript</Box> and{' '}
                  <Box component="span" sx={{ color: accent, fontWeight: 600 }}>modern React patterns</Box>, I build reusable and maintainable component architectures, manage complex state, and integrate APIs efficiently to deliver smooth and responsive user experiences.
                </Typography>
                <Typography sx={{ lineHeight: 1.9, color: 'text.secondary', mb: 2 }}>
                  I have practical experience in performance optimization, debugging production issues, and improving application scalability. I actively collaborate with backend and AI teams to integrate real-world features into products used by clients.
                </Typography>
                <Typography sx={{ lineHeight: 1.9, color: 'text.secondary' }}>
                  I thrive at the intersection of{' '}
                  <Box component="span" sx={{ color: accent2, fontWeight: 600 }}>AI technologies</Box> and{' '}
                  <Box component="span" sx={{ color: accent2, fontWeight: 600 }}>frontend engineering</Box>, and I'm continuously working on improving my problem-solving skills, system design understanding, and writing clean, scalable code.
                </Typography>

                <Box
                  sx={{
                    my: 3,
                    height: 1,
                    background: dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
                  }}
                />

                <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                  {[
                    { label: 'Degree', value: 'B.Tech CSE' },
                    { label: 'CGPA', value: '7.90' },
                    { label: 'Exp.', value: '2.6+ Years' },
                  ].map(f => (
                    <Box key={f.label}>
                      <Typography sx={{ fontSize: '0.7rem', color: 'text.disabled', textTransform: 'uppercase', letterSpacing: 1 }}>
                        {f.label}
                      </Typography>
                      <Typography sx={{ fontWeight: 700, color: accent, fontSize: '1rem' }}>
                        {f.value}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </TiltCard>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              variants={stagger}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              style={{ display: 'flex', flexDirection: 'column', gap: '16px', height: '100%' }}
            >
              {INFO_CARDS.map((card, i) => (
                <motion.div key={i} variants={fadeRight} style={{ flex: 1 }}>
                  <TiltCard
                    sx={{
                      background: glassBg,
                      border: `1px solid ${card.color}25`,
                      backdropFilter: 'blur(18px)',
                      borderRadius: 4,
                      p: 2.5,
                      height: '100%',
                      cursor: 'default',
                      transition: 'border-color 0.3s, box-shadow 0.3s',
                      '&:hover': {
                        borderColor: `${card.color}60`,
                        boxShadow: `0 8px 30px ${card.color}20`,
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box
                        sx={{
                          fontSize: '1.8rem',
                          width: 50,
                          height: 50,
                          borderRadius: 2.5,
                          background: `${card.color}12`,
                          border: `1px solid ${card.color}30`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        {card.icon}
                      </Box>
                      <Box sx={{ minWidth: 0 }}>
                        <Typography sx={{ fontWeight: 700, fontSize: '0.95rem', mb: 0.3 }}>
                          {card.title}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: '0.78rem',
                            color: 'text.secondary',
                            lineHeight: 1.4,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          {card.sub}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: '0.72rem',
                            color: card.color,
                            fontWeight: 600,
                            mt: 0.2,
                          }}
                        >
                          {card.detail}
                        </Typography>
                      </Box>
                    </Box>
                  </TiltCard>
                </motion.div>
              ))}
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
