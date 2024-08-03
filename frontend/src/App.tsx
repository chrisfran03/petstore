import React from 'react'
import Navbar from './components/navbar/Navbar'
import { Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home.page"
import Products from './pages/products/Products.page'
import AddProduct from './pages/add-product/AddProduct.page'
import EditProduct from './pages/edit-product/EditProduct.page'

const App: React.FC = () => {
  return (
    <div>

      <Navbar />

      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products">
            <Route index element={<Products />} />
            <Route path="add" element={<AddProduct />} />
            <Route path="edit/:id" element={<EditProduct />} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App