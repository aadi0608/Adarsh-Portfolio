import { Box } from '@mui/material'
import { useCallback, useRef } from 'react'

export default function TiltCard({ children, sx = {}, intensity = 12 }) {
  const ref = useRef(null)

  const onMouseMove = useCallback(
    e => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      el.style.transform = `perspective(900px) rotateY(${x * intensity}deg) rotateX(${-y * intensity}deg) scale3d(1.02,1.02,1.02)`
    },
    [intensity]
  )

  const onMouseLeave = useCallback(() => {
    if (ref.current) {
      ref.current.style.transform =
        'perspective(900px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)'
    }
  }, [])

  return (
    <Box
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      sx={{
        transformStyle: 'preserve-3d',
        transition: 'transform 0.35s ease, box-shadow 0.35s ease',
        willChange: 'transform',
        ...sx,
      }}
    >
      {children}
    </Box>
  )
}
