import { useRef } from 'react'
import { Box, Container, Grid, Typography, Tooltip } from '@mui/material'
import { motion, useInView } from 'framer-motion'
import { SKILLS, SKILL_BARS } from '../data'

const pillVariants = {
  hidden: { y: 30, opacity: 0, scale: 0.8 },
  visible: i => ({
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.04, type: 'spring', stiffness: 80, damping: 15 },
  }),
}

function CircularProgress({ pct, color, label, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const radius = 38
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (inView ? pct : 0) / 100 * circumference

  return (
    <Box ref={ref} sx={{ textAlign: 'center', py: 1 }}>
      <Box sx={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="100" height="100" viewBox="0 0 100 100">
          <circle
            cx="50" cy="50" r={radius}
            fill="none"
            stroke={color} strokeWidth="3"
            opacity={0.12}
          />
          <motion.circle
            cx="50" cy="50" r={radius}
            fill="none"
            stroke={color}
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.5, delay, ease: 'easeOut' }}
            transform="rotate(-90, 50, 50)"
            style={{ filter: `drop-shadow(0 0 6px ${color}60)` }}
          />
        </svg>
        <Typography
          sx={{
            position: 'absolute',
            fontWeight: 800,
            fontSize: '0.95rem',
            fontFamily: 'Syne',
            background: `linear-gradient(135deg, ${color}, ${color}cc)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {inView ? pct : 0}%
        </Typography>
      </Box>
      <Typography sx={{ mt: 1, fontSize: '0.78rem', fontWeight: 600 }}>{label}</Typography>
    </Box>
  )
}

export default function Skills({ dark }) {
  const accent = dark ? '#00e5ff' : '#7c4dff'
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, amount: 0.1 })

  const glassBg = dark ? 'rgba(10,25,50,0.55)' : 'rgba(255,255,255,0.6)'

  return (
    <Box
      id="skills"
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
              mb: 1.5,
              fontSize: { xs: '2rem', md: '2.8rem' },
              '&::after': {
                content: '""',
                display: 'block',
                width: 60, height: 4, borderRadius: 2,
                background: 'linear-gradient(90deg,#00e5ff,#7c4dff)',
                mt: 1.5,
                boxShadow: '0 0 12px rgba(0,229,255,0.4)',
              },
            }}
          >
            Skills &amp; Tech
          </Typography>
          <Typography sx={{ color: 'text.secondary', mb: 6 }}>
            Technologies I work with every day
          </Typography>
        </motion.div>

        <Box
          component={motion.div}
          sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.8, mb: 7, justifyContent: 'center' }}
        >
          {SKILLS.map((skill, i) => (
            <Tooltip key={skill.label} title={skill.label} arrow placement="top">
              <Box
                component={motion.div}
                custom={i}
                variants={pillVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                whileHover={{ y: -6, scale: 1.08 }}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.2,
                  background: glassBg,
                  border: `1px solid ${skill.color}28`,
                  backdropFilter: 'blur(14px)',
                  borderRadius: 3,
                  px: 2,
                  py: 1.1,
                  cursor: 'default',
                  transition: 'background 0.3s, border-color 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    background: `${skill.color}12`,
                    border: `1px solid ${skill.color}55`,
                    boxShadow: `0 8px 28px ${skill.color}28`,
                  },
                }}
              >
                <Box sx={{ fontSize: '1.15rem' }}>{skill.icon}</Box>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: '0.86rem',
                    color: skill.color === '#ffffff' || skill.color === '#a8b3cf'
                      ? accent
                      : skill.color,
                  }}
                >
                  {skill.label}
                </Typography>
              </Box>
            </Tooltip>
          ))}
        </Box>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          <Typography variant="h5" sx={{ mb: 4, fontWeight: 600, textAlign: 'center' }}>
            Core Proficiencies
          </Typography>
        </motion.div>

        <Grid container spacing={3} justifyContent="center">
          {SKILL_BARS.map((item, i) => (
            <Grid item xs={6} sm={4} md={2} key={i}>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                <Box
                  sx={{
                    background: glassBg,
                    border: `1px solid ${item.color}20`,
                    backdropFilter: 'blur(12px)',
                    borderRadius: 3,
                    p: 2,
                    textAlign: 'center',
                    transition: 'border-color 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      borderColor: `${item.color}50`,
                      boxShadow: `0 8px 25px ${item.color}20`,
                    },
                  }}
                >
                  <CircularProgress {...item} delay={0.6 + i * 0.1} />
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
