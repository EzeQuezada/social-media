import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { SocialMedia } from './SocialMedia.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SocialMedia />
  </StrictMode>,
)
