import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Homepage from './Homepage.tsx'
import { ThemeProvider } from '@mui/material'
import theme from './theme.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme = {theme}>
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>,
  </ThemeProvider>
)
