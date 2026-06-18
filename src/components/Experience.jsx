import { useRef } from 'react'
import { Box, Container, Grid, Typography, Chip } from '@mui/material'
import { motion, useInView } from 'framer-motion'
import { EXPERIENCE } from '../data'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
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

function TimelineDot({ delay }) {
  return (
    <Box
      component={motion.div}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay, type: 'spring', stiffness: 200 }}
      sx={{
        width: 12,
        height: 12,
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #00e5ff, #7c4dff)',
        boxShadow: '0 0 12px rgba(0,229,255,0.5)',
        flexShrink: 0,
        mt: 0.6,
      }}
    />
  )
}

export default function Experience({ dark }) {
  const accent = dark ? '#00e5ff' : '#7c4dff'
  const accent2 = dark ? '#7c4dff' : '#ff4081'

  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, amount: 0.1 })

  const glassBg = dark ? 'rgba(10,25,50,0.6)' : 'rgba(255,255,255,0.65)'
  const glassBorder = dark
    ? '1px solid rgba(0,229,255,0.14)'
    : '1px solid rgba(124,77,255,0.14)'

  return (
    <Box
      id="experience"
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
                width: 60, height: 4, borderRadius: 2,
                background: 'linear-gradient(90deg,#00e5ff,#7c4dff)',
                mt: 1.5,
                boxShadow: '0 0 12px rgba(0,229,255,0.4)',
              },
            }}
          >
            Experience
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <Box
                component={motion.div}
                whileHover={{ y: -4 }}
                sx={{
                  background: glassBg,
                  border: `1px solid ${accent}28`,
                  backdropFilter: 'blur(18px)',
                  borderRadius: 4,
                  p: 4,
                  height: '100%',
                  transition: 'box-shadow 0.3s, border-color 0.3s',
                  '&:hover': {
                    boxShadow: `0 12px 40px ${accent}18`,
                    borderColor: `${accent}45`,
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 58,
                      height: 58,
                      borderRadius: 2.5,
                      background: `linear-gradient(135deg,${accent}22,${accent2}22)`,
                      border: `1px solid ${accent}28`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.9rem',
                      flexShrink: 0,
                    }}
                  >
                    {EXPERIENCE.icon}
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, lineHeight: 1.2 }}>
                      {EXPERIENCE.role}
                    </Typography>
                    <Typography sx={{ color: accent, fontWeight: 600, fontSize: '0.88rem', mt: 0.3 }}>
                      {EXPERIENCE.company}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 3 }}>
                  <Chip
                    label={EXPERIENCE.period}
                    size="small"
                    sx={{
                      background: `${accent}18`,
                      color: accent,
                      border: `1px solid ${accent}38`,
                      fontWeight: 600,
                      fontSize: '0.76rem',
                    }}
                  />
                  <Chip
                    label={EXPERIENCE.type}
                    size="small"
                    sx={{
                      background: `${accent2}18`,
                      color: accent2,
                      border: `1px solid ${accent2}38`,
                      fontWeight: 600,
                      fontSize: '0.76rem',
                    }}
                  />
                </Box>

                <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, fontSize: '0.9rem' }}>
                  {EXPERIENCE.description}
                </Typography>

                <Box
                  sx={{
                    mt: 3,
                    height: 2,
                    borderRadius: 1,
                    background: `linear-gradient(90deg, ${accent}60, transparent)`,
                  }}
                />

                <Box sx={{ mt: 2.5, display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {[
                    { label: 'Industry', value: 'AI / Automation' },
                    { label: 'Stack',    value: 'React · RN · TypeScript' },
                    { label: 'Domain',   value: 'Web + Mobile Apps' },
                  ].map(item => (
                    <Box key={item.label} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography sx={{ fontSize: '0.8rem', color: 'text.disabled' }}>{item.label}</Typography>
                      <Typography sx={{ fontSize: '0.8rem', fontWeight: 600, color: 'text.secondary' }}>{item.value}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={7}>
            <Box sx={{ position: 'relative', pl: 4 }}>
              <Box
                sx={{
                  position: 'absolute',
                  left: 12,
                  top: 6,
                  bottom: 6,
                  width: 2,
                  background: `linear-gradient(180deg, ${accent}, ${accent2}, transparent)`,
                  borderRadius: 1,
                }}
              />
              <motion.div
                variants={stagger}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
              >
                {EXPERIENCE.responsibilities.map((item, i) => (
                  <motion.div key={i} variants={fadeRight}>
                    <Box
                      component={motion.div}
                      whileHover={{ x: 8 }}
                      sx={{
                        display: 'flex',
                        gap: 2.5,
                        alignItems: 'flex-start',
                        background: glassBg,
                        border: glassBorder,
                        backdropFilter: 'blur(14px)',
                        borderRadius: 3,
                        p: 2.2,
                        cursor: 'default',
                        transition: 'border-color 0.3s, box-shadow 0.3s',
                        '&:hover': {
                          borderColor: accent,
                          boxShadow: `0 6px 28px ${accent}16`,
                          background: dark
                            ? 'rgba(0,229,255,0.04)'
                            : 'rgba(124,77,255,0.04)',
                        },
                      }}
                    >
                      <TimelineDot delay={0.5 + i * 0.1} />
                      <Box
                        sx={{
                          fontSize: '1.25rem',
                          minWidth: 38,
                          height: 38,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: `${accent}12`,
                          border: `1px solid ${accent}20`,
                          borderRadius: 2,
                          flexShrink: 0,
                        }}
                      >
                        {item.icon}
                      </Box>
                      <Typography sx={{ fontSize: '0.88rem', lineHeight: 1.75, color: 'text.secondary', pt: 0.3 }}>
                        {item.text}
                      </Typography>
                    </Box>
                  </motion.div>
                ))}
              </motion.div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
