import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Message from './Message.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Message/>
  </StrictMode>,
)
