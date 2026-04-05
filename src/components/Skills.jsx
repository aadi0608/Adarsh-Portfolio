import { Box, Container, Grid, Typography, Tooltip } from '@mui/material'
import { SKILLS, SKILL_BARS } from '../data'
import Reveal from './Reveal'
import { useScrollReveal } from '../hooks/useScrollReveal'

function SkillBar({ label, pct, color, delay }) {
  const { ref, visible } = useScrollReveal()
  return (
    <Box ref={ref}>
      <Reveal delay={delay}>
        <Box
          sx={{
            background: 'rgba(255,255,255,0.04)',
            border: `1px solid ${color}20`,
            backdropFilter: 'blur(12px)',
            borderRadius: 3,
            p: 2.5,
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.2 }}>
            <Typography sx={{ fontWeight: 600, fontSize: '0.88rem' }}>{label}</Typography>
            <Typography sx={{ color, fontWeight: 700, fontSize: '0.88rem' }}>{pct}%</Typography>
          </Box>
          <Box
            sx={{
              height: 6,
              borderRadius: 3,
              background: 'rgba(255,255,255,0.07)',
              overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                height: '100%',
                borderRadius: 3,
                background: `linear-gradient(90deg, ${color}, ${color}88)`,
                boxShadow: `0 0 10px ${color}50`,
                width: visible ? `${pct}%` : '0%',
                transition: 'width 1.4s cubic-bezier(0.4,0,0.2,1)',
                transitionDelay: `${delay + 0.1}s`,
              }}
            />
          </Box>
        </Box>
      </Reveal>
    </Box>
  )
}

export default function Skills({ dark }) {
  const accent    = dark ? '#00e5ff' : '#7c4dff'
  const glassBg   = dark ? 'rgba(10,25,50,0.55)' : 'rgba(255,255,255,0.6)'
  const glassBorder = dark ? '1px solid rgba(0,229,255,0.13)' : '1px solid rgba(124,77,255,0.13)'

  return (
    <Box id="skills" sx={{ py: 12, position: 'relative', zIndex: 1 }}>
      <Container maxWidth="lg">
        <Reveal>
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
              },
            }}
          >
            Skills &amp; Tech
          </Typography>
          <Typography sx={{ color: 'text.secondary', mb: 6 }}>
            Technologies I work with every day
          </Typography>
        </Reveal>

        {/* Skill pills */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.8, mb: 7 }}>
          {SKILLS.map((skill, i) => (
            <Reveal key={skill.label} delay={i * 0.03}>
              <Tooltip title={skill.label} arrow placement="top">
                <Box
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
                    transition: 'all 0.3s cubic-bezier(0.34,1.56,0.64,1)',
                    '&:hover': {
                      transform: 'translateY(-5px) scale(1.07)',
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
            </Reveal>
          ))}
        </Box>

        {/* Proficiency bars */}
        <Reveal>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
            Core Proficiencies
          </Typography>
        </Reveal>
        <Grid container spacing={2.5}>
          {SKILL_BARS.map((item, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <SkillBar {...item} delay={i * 0.08} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
