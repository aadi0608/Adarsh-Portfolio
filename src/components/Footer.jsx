import { Box, Container, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { PERSONAL } from '../data'

export default function Footer({ dark }) {
  const border = dark ? 'rgba(0,229,255,0.1)' : 'rgba(124,77,255,0.1)'
  const bg = dark ? 'rgba(3,8,17,0.95)' : 'rgba(240,244,255,0.95)'

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        borderTop: `1px solid ${border}`,
        background: bg,
        backdropFilter: 'blur(20px)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 1,
          }}
        >
          <Typography sx={{
            color: 'text.secondary',
            fontSize: '0.85rem',
            display: 'flex',
            alignItems: 'center',
            gap: 0.6,
          }}>
            Crafted with{' '}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{ display: 'inline-flex', lineHeight: 1 }}
            >
              <FavoriteIcon sx={{ fontSize: '0.9rem', color: '#ff4081' }} />
            </motion.span>{' '}
            by{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(135deg, #00e5ff 0%, #7c4dff 55%, #ff4081 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: 700,
              }}
            >
              {PERSONAL.name}
            </Box>
          </Typography>

          <Typography sx={{ color: 'text.disabled', fontSize: '0.78rem' }}>
            Built with React &amp; Material UI · © {new Date().getFullYear()}
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
