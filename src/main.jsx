import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ParentComponent from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ParentComponent/>
  </StrictMode>
)



//Alternative(Less Performance)
/* 
import React from 'react'
import ReactDOM from 'react-dom/client'
import ParentComponent from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ParentComponent/>
  <React.StrictMode> 
)

*/






























