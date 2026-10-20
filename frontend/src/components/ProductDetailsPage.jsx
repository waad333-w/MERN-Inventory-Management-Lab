import { useState, useEffect } from "react"
import axios from "axios"
import { Link, useParams, useNavigate } from "react-router"



function ProductDetails() {
    const [ product, setProduct ] = useState(null)

    const {id} = useParams()
    const navigate = useNavigate()

    async function getProduct(){
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/products/${id}`)
        setProduct(response.data)
    }

    async function deleteProduct(){
        const response = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/products/${id}`)
        navigate('/products')

    }

    useEffect(()=>{
        getProduct()
    },[])

  return (
    <div>
        <h1>Product Details</h1>
        {product ? <>
        <h2>Title: {product.title}</h2>
        <p>Description: {product.description}</p>
        <p>Price: {product.price}</p>
        <p>Quantity: {product.quantity}</p>

        <button onClick={()=>{deleteProduct(product._id)}}>Delete Product</button>
        <Link to={`/products/${product._id}/edit`}>Edit Product</Link>
        </> : <p>Loading...</p>}
    </div>
  )
}

export default ProductDetails