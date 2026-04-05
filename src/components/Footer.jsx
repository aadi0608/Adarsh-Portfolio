import { Box, Container, Typography } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { PERSONAL } from '../data'

export default function Footer({ dark }) {
  const border = dark ? 'rgba(0,229,255,0.1)' : 'rgba(124,77,255,0.1)'
  const bg     = dark ? 'rgba(4,11,20,0.9)'   : 'rgba(240,244,255,0.9)'

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
          <Typography sx={{ color: 'text.secondary', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: 0.6 }}>
            Crafted with{' '}
            <FavoriteIcon sx={{ fontSize: '0.9rem', color: '#ff4081' }} />{' '}
            by{' '}
            <Box
              component="span"
              className="gradient-text"
              sx={{ fontWeight: 700 }}
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
