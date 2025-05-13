import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Api from './components/Api.jsx'
import Home from './Home.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Home/>
    <Api/>
    
  </StrictMode>,
)
