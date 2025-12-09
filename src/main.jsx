import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Display from './Display.jsx'
import  Display1  from './Display1.jsx'
import UseRef from './UseRef.jsx'
import Useeffect from './Useeffect.jsx'
import Multistates from './multistates.jsx'
import Usestate from './usestate.jsx';
import Array from './array.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Array/>
  </StrictMode>,
)