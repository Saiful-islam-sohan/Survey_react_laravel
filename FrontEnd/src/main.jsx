import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";


import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   

    
    <BrowserRouter>
    <contextProvider>
          <App></App>
    </contextProvider>
    
    </BrowserRouter>
   
    
  </React.StrictMode>,
  
  
)
