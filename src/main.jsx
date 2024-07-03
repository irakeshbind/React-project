import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Mainpage from './ Mainpage'
import Navigationbar from './Navigationbar'
import Middle from './Middle'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navigationbar/>
  <Middle/>
    <Mainpage/>
  </React.StrictMode>,
)
