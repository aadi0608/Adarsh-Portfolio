import { Box } from '@mui/material'
import { useScrollReveal } from '../hooks/useScrollReveal'

const ANIMATIONS = {
  up:    'fadeInUp 0.75s ease both',
  left:  'fadeInLeft 0.75s ease both',
  right: 'fadeInRight 0.75s ease both',
}

export default function Reveal({ children, delay = 0, direction = 'up', sx = {} }) {
  const { ref, visible } = useScrollReveal()

  return (
    <Box
      ref={ref}
      sx={{
        opacity: visible ? undefined : 0,
        animation: visible
          ? `${ANIMATIONS[direction]} ${delay}s`
          : 'none',
        animationFillMode: 'both',
        ...sx,
      }}
    >
      {children}
    </Box>
  )
}
