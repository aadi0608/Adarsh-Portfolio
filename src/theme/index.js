import { createTheme } from '@mui/material/styles'

const commonTypography = {
  fontFamily: "'DM Sans', sans-serif",
  h1: { fontFamily: "'Syne', sans-serif", fontWeight: 800 },
  h2: { fontFamily: "'Syne', sans-serif", fontWeight: 700 },
  h3: { fontFamily: "'Syne', sans-serif", fontWeight: 700 },
  h4: { fontFamily: "'Syne', sans-serif", fontWeight: 600 },
  h5: { fontFamily: "'Syne', sans-serif", fontWeight: 600 },
  h6: { fontFamily: "'Syne', sans-serif", fontWeight: 600 },
}

const commonComponents = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 50,
        textTransform: 'none',
        fontWeight: 600,
        letterSpacing: '0.4px',
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: { borderRadius: 8, fontWeight: 500 },
    },
  },
}

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary:    { main: '#00e5ff' },
    secondary:  { main: '#7c4dff' },
    background: {
      default: '#040b14',
      paper:   'rgba(8, 18, 38, 0.75)',
    },
    text: {
      primary:   '#e8f4f8',
      secondary: '#8faabe',
    },
  },
  typography: commonTypography,
  components: commonComponents,
})

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary:   { main: '#7c4dff' },
    secondary: { main: '#00b4d8' },
    background: {
      default: '#f0f4ff',
      paper:   'rgba(255, 255, 255, 0.72)',
    },
    text: {
      primary:   '#1a1a2e',
      secondary: '#556080',
    },
  },
  typography: commonTypography,
  components: commonComponents,
})
