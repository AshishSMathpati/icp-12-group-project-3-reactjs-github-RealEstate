import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Routes , Route } from 'react-router'
import About from './view/About'
import Home from './view/Home'


createRoot(document.getElementById('root')).render(
<>

<BrowserRouter>
<Routes>
    <Route  path='/' element={<Home/>} />
    <Route  path='/about' element={<About/>} />
    <Route  path='/property' element={<Property/>} />
</Routes>
</BrowserRouter>

</>
)
