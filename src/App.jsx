import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import PlaceOrder from './pages/placeOrder/PlaceOrder.jsx'
import Cart from './pages/cart/Cart.jsx'
import Home from './pages/Home/Home.jsx'
import Footer from './components/Footer/footer.jsx'
import { useState } from 'react'
import LOginPopUp from './components/LoginPopUP/LOginPopUp.jsx'


function App() {

  const [showLogin,setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LOginPopUp setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
     </>
  )
}

export default App
