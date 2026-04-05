import { useRef } from 'react'
import { Box } from '@mui/material'
import { useParticleCanvas } from '../hooks/useParticleCanvas'

export default function ParticleCanvas({ dark }) {
  const canvasRef = useRef(null)
  useParticleCanvas(canvasRef, dark)

  return (
    <Box
      component="canvas"
      ref={canvasRef}
      sx={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}
