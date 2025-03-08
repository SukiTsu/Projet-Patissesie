import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import "../src/assets/style/global/styleSansSaison.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
