import { useState } from 'react'
import {
  Box, Container, Grid, Typography, Button, TextField,
} from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import { CONTACT_LINKS } from '../data'
import Reveal from './Reveal'
import TiltCard from './TiltCard'
import emailjs from 'emailjs-com'

export default function Contact({ dark }) {
  const accent      = dark ? '#00e5ff' : '#7c4dff'
  const glassBg     = dark ? 'rgba(10,25,50,0.6)'  : 'rgba(255,255,255,0.65)'
  const glassBorder = dark ? '1px solid rgba(0,229,255,0.14)' : '1px solid rgba(124,77,255,0.14)'

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()

      if (!/\S+@\S+\.\S+/.test(form.email)) {
    alert("Invalid email")
    return
    }
    setLoading(true)
  emailjs.send(
    import.meta.env.VITE_SERVICE_ID,
    import.meta.env.VITE_TEMPLATE_ID,
    form,
    import.meta.env.VITE_PUBLIC_KEY
  )
      .then(() => {
      setSent(true)
      setForm({ name: '', email: '', message: '' })
    })
    .catch(() => {
      alert("Failed to send message")
    })
    .finally(() => {
      setLoading(false)
    })
  }

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
    },
    '& .MuiInputLabel-root.Mui-focused': { color: accent },
  }

  return (
    <Box id="contact" sx={{ py: 12, pb: 16, position: 'relative', zIndex: 1 }}>
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
            Let's Connect
          </Typography>
          <Typography sx={{ color: 'text.secondary', mb: 7 }}>
            Have a project in mind? I'd love to hear from you.
          </Typography>
        </Reveal>

        <Grid container spacing={4}>
          {/* Contact links */}
          <Grid item xs={12} md={5}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {CONTACT_LINKS.map((link, i) => (
                <Reveal key={i} delay={i * 0.1} direction="left">
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
                      <Typography
                        sx={{
                          fontSize: '0.7rem',
                          color: link.color,
                          fontWeight: 700,
                          letterSpacing: 1.2,
                          textTransform: 'uppercase',
                        }}
                      >
                        {link.label}
                      </Typography>
                      <Typography sx={{ fontSize: '0.88rem', fontWeight: 500 }}>
                        {link.value}
                      </Typography>
                    </Box>
                  </Box>
                </Reveal>
              ))}

              {/* Availability badge */}
              <Reveal delay={0.45}>
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
                    sx={{
                      width: 10, height: 10,
                      borderRadius: '50%',
                      background: '#4caf50',
                      boxShadow: '0 0 8px #4caf50',
                      animation: 'pulseGlow 2s ease-in-out infinite',
                      flexShrink: 0,
                    }}
                  />
                  <Typography sx={{ fontSize: '0.85rem', color: '#4caf50', fontWeight: 600 }}>
                    Open to new opportunities & collaborations
                  </Typography>
                </Box>
              </Reveal>
            </Box>
          </Grid>

          {/* Message form */}
          <Grid item xs={12} md={7}>
            <Reveal delay={0.2} direction="right">
              <TiltCard
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

                {sent ? (
                  <Box
                    sx={{
                      py: 6,
                      textAlign: 'center',
                      animation: 'fadeInUp 0.5s ease both',
                    }}
                  >
                    <Typography sx={{ fontSize: '3.5rem', mb: 2 }}>🎉</Typography>
                    <Typography variant="h6" sx={{ color: accent, mb: 1 }}>
                      Message Sent!
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>
                      Thanks for reaching out. I'll get back to you soon.
                    </Typography>
                  </Box>
                ) : (
                  <Box
                    component="form"
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
                    <Button
                      disabled={loading}
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
                    </Button>
                  </Box>
                )}
              </TiltCard>
            </Reveal>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
