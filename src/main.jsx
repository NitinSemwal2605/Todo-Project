import React from 'react'
import ReactDOM from 'react-dom/client'
import ResponsiveAppBar from '../src/components/Header/Header.jsx'
import LeaderBoard from '../src/components/LeaderBoard/Lead.jsx'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ResponsiveAppBar />
    <App/>
    <LeaderBoard/>
  </React.StrictMode>,
)
