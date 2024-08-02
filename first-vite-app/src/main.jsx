import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Hi from './Hi.jsx'

const CustomEl=React.createElement(
  'a', {
    href:"https://netflix.com", target:"_blank"
  }, 'click here to visit Netflix'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Hi/>
    {CustomEl}
  </React.StrictMode>,
)
