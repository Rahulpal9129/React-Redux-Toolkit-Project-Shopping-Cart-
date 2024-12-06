
import './App.css'

import Navbar from './components/Navbar'
import Product from './components/Product'
import Cart from './components/Cart'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  

  return (
    <>
    <BrowserRouter>
   
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Product></Product>}/>
      <Route path='cart' element={<Cart></Cart>}/>
    
    
    </Routes>

    </BrowserRouter>
       
    </>
  )
}

export default App
