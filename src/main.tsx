import { StrictMode } from 'react'
import './index.css'
import App from './App.tsx'
import ReactDom from 'react-dom/client'
import { BrowserRouter as Router} from 'react-router-dom'

ReactDom.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
)