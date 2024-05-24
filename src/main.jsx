import rdom from 'react-dom/client'
import App from './app/App'
import './global.css'

const root = rdom.createRoot(document.getElementById('root'))
root.render(
  <>
    <App />
  </>
)