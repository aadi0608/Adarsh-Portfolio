import { useRef, useState } from 'react'
import { Box, Container, Grid, Typography, Chip } from '@mui/material'
import { motion, useInView } from 'framer-motion'
import { PROJECTS } from '../data'

const cardVariants = {
  hidden: { y: 60, opacity: 0 },
  visible: i => ({
    y: 0,
    opacity: 1,
    transition: { delay: i * 0.12, type: 'spring', stiffness: 60, damping: 20 },
  }),
}

function ProjectCard({ proj, i }) {
  const [hovered, setHovered] = useState(false)
  const ref = useRef(null)
  const [rotate, setRotate] = useState({ x: 0, y: 0 })

  const handleMouse = e => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setRotate({ x: -y * 12, y: x * 12 })
  }

  const reset = () => {
    setRotate({ x: 0, y: 0 })
    setHovered(false)
  }

  return (
    <Box
      component={motion.div}
      ref={ref}
      custom={i}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      onMouseMove={handleMouse}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={reset}
      style={{
        perspective: '1200px',
        transformStyle: 'preserve-3d',
      }}
    >
      <motion.div
        animate={{
          rotateX: rotate.x,
          rotateY: rotate.y,
          scale: hovered ? 1.02 : 1,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        style={{
          height: '100%',
          transformStyle: 'preserve-3d',
        }}
      >
        <Box
          sx={{
            background: t => t.palette.mode === 'dark'
              ? 'rgba(10,25,50,0.6)'
              : 'rgba(255,255,255,0.65)',
            border: hovered
              ? `1px solid ${proj.accentColor}50`
              : t => t.palette.mode === 'dark'
                ? '1px solid rgba(0,229,255,0.13)'
                : '1px solid rgba(124,77,255,0.13)',
            backdropFilter: 'blur(18px)',
            borderRadius: 4,
            overflow: 'hidden',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            cursor: 'default',
            boxShadow: hovered ? `0 28px 70px ${proj.accentColor}25` : 'none',
            transition: 'border-color 0.3s, box-shadow 0.5s',
            transformStyle: 'preserve-3d',
          }}
        >
          <Box
            sx={{
              height: 5,
              background: proj.gradient,
              opacity: hovered ? 1 : 0.75,
              transition: 'opacity 0.3s',
            }}
          />

          <Box sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
            <Box
              sx={{
                width: 58,
                height: 58,
                borderRadius: 3,
                background: proj.gradient,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.85rem',
                mb: 2.5,
                boxShadow: hovered ? `0 12px 35px ${proj.accentColor}50` : `0 6px 20px ${proj.accentColor}30`,
                transform: hovered ? 'scale(1.1) rotate(-3deg)' : 'none',
                transition: 'all 0.4s cubic-bezier(0.34,1.56,0.64,1)',
              }}
            >
              {proj.icon}
            </Box>

            <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
              {proj.title}
            </Typography>
            <Typography
              sx={{
                fontSize: '0.74rem',
                color: 'primary.main',
                fontWeight: 600,
                letterSpacing: '0.4px',
                mb: 2,
                textTransform: 'uppercase',
              }}
            >
              {proj.subtitle}
            </Typography>

            <Typography
              sx={{
                fontSize: '0.86rem',
                color: 'text.secondary',
                lineHeight: 1.78,
                mb: 2.5,
                flex: 1,
              }}
            >
              {proj.desc}
            </Typography>

            <Box
              sx={{
                p: 1.5,
                borderRadius: 2,
                mb: 2.5,
                background: `${proj.accentColor}0e`,
                border: `1px solid ${proj.accentColor}28`,
              }}
            >
              <Typography sx={{
                fontSize: '0.78rem',
                color: proj.accentColor,
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
              }}>
                <motion.span
                  animate={hovered ? { rotate: [0, 15, -15, 0] } : {}}
                  transition={{ duration: 0.5 }}
                >
                  ✦
                </motion.span>
                {proj.highlight}
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8 }}>
              {proj.tags.map(tag => (
                <Chip
                  key={tag}
                  label={tag}
                  size="small"
                  sx={{
                    fontSize: '0.7rem',
                    background: t => t.palette.mode === 'dark'
                      ? 'rgba(255,255,255,0.06)'
                      : 'rgba(0,0,0,0.05)',
                    color: 'text.secondary',
                    border: t => `1px solid ${t.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                    '&:hover': {
                      background: `${proj.accentColor}18`,
                      color: proj.accentColor,
                      border: `1px solid ${proj.accentColor}40`,
                    },
                    transition: 'all 0.25s',
                  }}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </motion.div>
    </Box>
  )
}

export default function Projects({ dark }) {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, amount: 0.05 })

  return (
    <Box
      id="projects"
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
            Projects
          </Typography>
          <Typography sx={{ color: 'text.secondary', mb: 7 }}>
            Things I've built that make an impact
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {PROJECTS.map((proj, i) => (
            <Grid item xs={12} md={4} key={i}>
              <ProjectCard proj={proj} i={i} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
