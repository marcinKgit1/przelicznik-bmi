import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import existing stylesheets
import '../css/style.css'
import '../css/container.css'
import '../css/form.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
