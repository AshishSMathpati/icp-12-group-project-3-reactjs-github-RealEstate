import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Routes , Route } from 'react-router'
import About from './view/About'
import Home from './view/Home'
import Property from './view/Property'
import Contact from './view/Contact'
import LogIn from './view/LogIn';


createRoot(document.getElementById('root')).render(
<>

<BrowserRouter>
<Routes>
    <Route  path='/' element={<Home/>} />
    <Route  path='/about' element={<About/>} />
    <Route  path='/contact' element={<Contact/>} />
    <Route  path='/property' element={<Property/>} />
    <Route  path='/login' element={<LogIn/>} />
    
</Routes>
</BrowserRouter>

</>
)
