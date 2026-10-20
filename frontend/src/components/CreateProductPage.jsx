import { useState } from "react"
import axios from "axios"
import { useNavigate } from 'react-router'
import { createNewProduct } from "../services/productService"


function CreateProduct() {
    const [ formData, setFormData ] = useState({
        title:'',
        description:'',
        category:'',
        price:0,
        quantity:0
    })

    const navigate = useNavigate()
    function handleChange(event){
        setFormData({...formData,[event.target.name]:event.target.value})
    }
    async function handleSubmit(event){
        event.preventDefault()

        const response = await createNewProduct(formData)
        navigate('/products')
    }
  return (
    <div>
        <h1>Create Product</h1>

        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input 
            type="text" 
            name="title"
            id="title"
            onChange={handleChange}
            value={formData.title}
            />

            <label htmlFor="description">Description:</label>
            <input 
            type="text"
            name="description"
            id="description"
            onChange={handleChange}
            value={formData.description}
             />

            <label htmlFor="category">Category:</label>
            <select 
            type="text"
            name="category"
            id="category"
            onChange={handleChange}
            value={formData.category}
            >
                <option value="">Select a Category</option>
                <option value="electronics">Electronics</option>
                <option value="food">Food</option>
                <option value="clothing">Clothing</option>
                <option value="furniture">Furniture</option>
                <option value="other">Other</option>

                </select>







            <label htmlFor="price">Price:</label>
            <input 
            type="text"
            name="price"
            id="price"
            onChange={handleChange}
            value={formData.price}
             />

            <label htmlFor="quantity">Quantity:</label>
            <input 
            type="text"
            name="quantity"
            id="quantity"
            onChange={handleChange}
            value={formData.quantity}
             />
             <button>Create Product</button>
        </form>
    </div>
  )
}

export default CreateProduct