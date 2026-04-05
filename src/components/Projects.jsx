import { Box, Container, Grid, Typography, Chip } from '@mui/material'
import { PROJECTS } from '../data'
import Reveal from './Reveal'

export default function Projects({ dark }) {
  const accent      = dark ? '#00e5ff' : '#7c4dff'
  const glassBg     = dark ? 'rgba(10,25,50,0.6)'  : 'rgba(255,255,255,0.65)'
  const glassBorder = dark ? '1px solid rgba(0,229,255,0.13)' : '1px solid rgba(124,77,255,0.13)'

  return (
    <Box id="projects" sx={{ py: 12, position: 'relative', zIndex: 1 }}>
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
            Projects
          </Typography>
          <Typography sx={{ color: 'text.secondary', mb: 7 }}>
            Things I've built that make an impact
          </Typography>
        </Reveal>

        <Grid container spacing={4}>
          {PROJECTS.map((proj, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Reveal delay={i * 0.15}>
                <Box
                  sx={{
                    background: glassBg,
                    border: glassBorder,
                    backdropFilter: 'blur(18px)',
                    borderRadius: 4,
                    overflow: 'hidden',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'default',
                    transition: 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease, border-color 0.3s',
                    '&:hover': {
                      transform: 'translateY(-14px) scale(1.02)',
                      boxShadow: `0 28px 70px ${proj.accentColor}25`,
                      borderColor: `${proj.accentColor}40`,
                    },
                    '&:hover .proj-top-bar': { opacity: 1 },
                    '&:hover .proj-icon-box': {
                      boxShadow: `0 12px 35px ${proj.accentColor}50`,
                      transform: 'scale(1.1) rotate(-3deg)',
                    },
                  }}
                >
                  {/* Top gradient bar */}
                  <Box
                    className="proj-top-bar"
                    sx={{
                      height: 5,
                      background: proj.gradient,
                      opacity: 0.75,
                      transition: 'opacity 0.3s',
                    }}
                  />

                  <Box sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
                    {/* Icon */}
                    <Box
                      className="proj-icon-box"
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
                        boxShadow: `0 6px 20px ${proj.accentColor}30`,
                        transition: 'all 0.4s cubic-bezier(0.34,1.56,0.64,1)',
                      }}
                    >
                      {proj.icon}
                    </Box>

                    {/* Title & subtitle */}
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                      {proj.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '0.74rem',
                        color: accent,
                        fontWeight: 600,
                        letterSpacing: '0.4px',
                        mb: 2,
                        textTransform: 'uppercase',
                      }}
                    >
                      {proj.subtitle}
                    </Typography>

                    {/* Description */}
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

                    {/* Highlight box */}
                    <Box
                      sx={{
                        p: 1.5,
                        borderRadius: 2,
                        mb: 2.5,
                        background: `${proj.accentColor}0e`,
                        border: `1px solid ${proj.accentColor}28`,
                      }}
                    >
                      <Typography sx={{ fontSize: '0.78rem', color: proj.accentColor, fontWeight: 600 }}>
                        ✦ {proj.highlight}
                      </Typography>
                    </Box>

                    {/* Tags */}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8 }}>
                      {proj.tags.map(tag => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          sx={{
                            fontSize: '0.7rem',
                            background: dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)',
                            color: 'text.secondary',
                            border: `1px solid ${dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
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
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
