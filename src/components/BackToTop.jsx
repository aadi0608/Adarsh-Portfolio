import { useState, useEffect } from 'react'
import { Fab, Tooltip } from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handler = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <Tooltip title="Back to top" placement="left">
          <Fab
            component={motion.button}
            size="medium"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
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
                boxShadow: '0 14px 38px rgba(0,229,255,0.55)',
              },
              transition: 'background 0.3s, box-shadow 0.3s',
            }}
          >
            <KeyboardArrowUpIcon />
          </Fab>
        </Tooltip>
      )}
    </AnimatePresence>
  )
}
