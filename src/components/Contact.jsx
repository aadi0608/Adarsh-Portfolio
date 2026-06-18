import { useState, useRef } from 'react'
import {
  Box, Container, Grid, Typography, Button, TextField,
} from '@mui/material'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import SendIcon from '@mui/icons-material/Send'
import { CONTACT_LINKS } from '../data'
import emailjs from 'emailjs-com'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const fadeLeft = {
  hidden: { x: -40, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 80, damping: 20 },
  },
}

const fadeRight = {
  hidden: { x: 40, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 80, damping: 20 },
  },
}

function MagneticButton({ children, sx = {}, ...props }) {
  const ref = useRef(null)

  const handleMouse = e => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    el.querySelector('button').style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`
  }

  const reset = () => {
    if (ref.current) {
      ref.current.querySelector('button').style.transform = 'translate(0, 0)'
    }
  }

  return (
    <Box ref={ref} onMouseMove={handleMouse} onMouseLeave={reset}>
      <Button sx={sx} {...props}>
        {children}
      </Button>
    </Box>
  )
}

export default function Contact({ dark }) {
  const accent = dark ? '#00e5ff' : '#7c4dff'

  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, amount: 0.1 })

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return

    emailjs.send(
      'service_8tqii66',
      'template_ib20rjh',
      form,
      'M7dWtAXq7zGWODNbr'
    )
    .then(() => {
      setSent(true)
      setForm({ name: '', email: '', message: '' })
    })
    .catch(err => console.error(err))
  }

  const glassBg = dark ? 'rgba(10,25,50,0.6)' : 'rgba(255,255,255,0.65)'
  const glassBorder = dark
    ? '1px solid rgba(0,229,255,0.14)'
    : '1px solid rgba(124,77,255,0.14)'

  const inputSx = {
    '& .MuiOutlinedInput-root': {
      borderRadius: 2.5,
      background: dark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)',
      '& fieldset': { borderColor: dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.12)' },
      '&:hover fieldset': { borderColor: `${accent}55` },
      '&.Mui-focused fieldset': {
        borderColor: accent,
        boxShadow: `0 0 0 3px ${accent}18`,
      },
      transition: 'all 0.3s',
    },
    '& .MuiInputLabel-root.Mui-focused': { color: accent },
    '& .MuiOutlinedInput-input': {
      transition: 'background 0.3s',
    },
  }

  return (
    <Box
      id="contact"
      ref={sectionRef}
      sx={{ py: 12, pb: 16, position: 'relative', zIndex: 1 }}
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
            Let's Connect
          </Typography>
          <Typography sx={{ color: 'text.secondary', mb: 7 }}>
            Have a project in mind? I'd love to hear from you.
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <motion.div
              variants={stagger}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
            >
              {CONTACT_LINKS.map((link, i) => (
                <motion.div key={i} variants={fadeLeft}>
                  <Box
                    component="a"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: 'flex',
                      gap: 2,
                      alignItems: 'center',
                      background: glassBg,
                      border: glassBorder,
                      backdropFilter: 'blur(14px)',
                      borderRadius: 3,
                      p: 2.2,
                      textDecoration: 'none',
                      color: 'inherit',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: link.color,
                        transform: 'translateX(8px)',
                        boxShadow: `0 8px 30px ${link.color}22`,
                        background: `${link.color}08`,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        fontSize: '1.4rem',
                        width: 46,
                        height: 46,
                        background: `${link.color}12`,
                        border: `1px solid ${link.color}28`,
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      {link.icon}
                    </Box>
                    <Box>
                      <Typography sx={{
                        fontSize: '0.7rem',
                        color: link.color,
                        fontWeight: 700,
                        letterSpacing: 1.2,
                        textTransform: 'uppercase',
                      }}>
                        {link.label}
                      </Typography>
                      <Typography sx={{ fontSize: '0.88rem', fontWeight: 500 }}>
                        {link.value}
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              ))}

              <motion.div variants={fadeLeft}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    background: dark ? 'rgba(76,175,80,0.1)' : 'rgba(76,175,80,0.08)',
                    border: '1px solid rgba(76,175,80,0.3)',
                    borderRadius: 3,
                    p: 2,
                    mt: 1,
                  }}
                >
                  <Box
                    component={motion.div}
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    sx={{
                      width: 10, height: 10,
                      borderRadius: '50%',
                      background: '#4caf50',
                      boxShadow: '0 0 8px #4caf50',
                      flexShrink: 0,
                    }}
                  />
                  <Typography sx={{ fontSize: '0.85rem', color: '#4caf50', fontWeight: 600 }}>
                    Open to new opportunities & collaborations
                  </Typography>
                </Box>
              </motion.div>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={7}>
            <motion.div
              variants={fadeRight}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <Box
                sx={{
                  background: glassBg,
                  border: glassBorder,
                  backdropFilter: 'blur(18px)',
                  borderRadius: 4,
                  p: { xs: 3, sm: 4 },
                }}
              >
                <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
                  Send a Message
                </Typography>

                <AnimatePresence mode="wait">
                  {sent ? (
                    <Box
                      key="sent"
                      component={motion.div}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      sx={{ py: 6, textAlign: 'center' }}
                    >
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.5 }}
                      >
                        <Typography sx={{ fontSize: '3.5rem', mb: 2 }}>🎉</Typography>
                      </motion.div>
                      <Typography variant="h6" sx={{ color: accent, mb: 1 }}>
                        Message Sent!
                      </Typography>
                      <Typography sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>
                        Thanks for reaching out. I'll get back to you soon.
                      </Typography>
                    </Box>
                  ) : (
                    <Box
                      key="form"
                      component={motion.form}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}
                    >
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="Your Name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            sx={inputSx}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="Email Address"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            sx={inputSx}
                          />
                        </Grid>
                      </Grid>
                      <TextField
                        fullWidth
                        label="Your Message"
                        name="message"
                        multiline
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        required
                        sx={inputSx}
                      />
                      <MagneticButton
                        type="submit"
                        variant="contained"
                        size="large"
                        endIcon={<SendIcon />}
                        sx={{
                          background: 'linear-gradient(135deg,#00e5ff,#7c4dff)',
                          color: '#fff',
                          py: 1.6,
                          fontSize: '0.95rem',
                          fontWeight: 700,
                          boxShadow: '0 8px 30px rgba(0,229,255,0.28)',
                          '&:hover': {
                            background: 'linear-gradient(135deg,#7c4dff,#00e5ff)',
                            boxShadow: '0 12px 40px rgba(0,229,255,0.45)',
                            transform: 'translateY(-2px)',
                          },
                          transition: 'all 0.3s',
                        }}
                      >
                        Send Message
                      </MagneticButton>
                    </Box>
                  )}
                </AnimatePresence>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
