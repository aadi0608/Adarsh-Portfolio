import { useState, useEffect } from 'react'
import { Fab, Zoom, Tooltip } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handler = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <Zoom in={show}>
      <Tooltip title="Back to top" placement="left">
        <Fab
          size="medium"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          sx={{
            position: 'fixed',
            bottom: 28,
            right: 28,
            zIndex: 200,
            background: 'linear-gradient(135deg,#00e5ff,#7c4dff)',
            color: '#fff',
            boxShadow: '0 8px 26px rgba(0,229,255,0.38)',
            '&:hover': {
              background: 'linear-gradient(135deg,#7c4dff,#00e5ff)',
              transform: 'translateY(-3px) scale(1.08)',
              boxShadow: '0 14px 38px rgba(0,229,255,0.55)',
            },
            transition: 'all 0.3s',
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Tooltip>
    </Zoom>
  )
}
