import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Resume } from './components/Resume.jsx';
import './styles/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Resume />
  </StrictMode>,
)
