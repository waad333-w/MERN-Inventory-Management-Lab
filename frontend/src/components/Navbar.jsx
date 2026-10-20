import React from 'react'
import { Link } from 'react-router'


function Navbar() {
  return (
    <div>
        <Link to='/'>Homepage</Link>
        <Link to='/products'>All Products</Link>
        <Link to='/products/create'>Create a Product</Link>
    </div>
  )
}

export default Navbar