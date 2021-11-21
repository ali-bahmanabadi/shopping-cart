import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './pages/Home'
import Product from './pages/Product'
import Cart from './pages/cart'

const App = () => {
  return (
    <div>
      <Header />
      <main className="min-h-screen my-5 mx-5">
        <div className="container max-w-screen-xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart/:id" element={<Cart />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
