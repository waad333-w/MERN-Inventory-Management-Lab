import AllProductPage from "./components/AllProductPage"
import ProductDetailsPage from "./components/ProductDetailsPage"
import CreateProductPage from "./components/CreateProductPage"
import UpdateProductPage from "./components/UpdateProductPage"
import Navbar from "./components/Navbar"
import { Routes, Route } from 'react-router'
import Homepage from "./components/Homepage"

function App() {
  
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/products" element={<AllProductPage/>} />
        <Route path="/products/:id" element={<ProductDetailsPage/>} />
        <Route path="/products/create" element={<CreateProductPage/>} />
        <Route path="/products/:id/edit" element={<UpdateProductPage/>} />
      </Routes>
    </div>
  )
}

export default App