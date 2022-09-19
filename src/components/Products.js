import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Products = () => {
    return (
        <>
            <div>Products</div>
            <NavLink to='featured-products'>Feature</NavLink>
            <NavLink to='new-products'>New products</NavLink>
            <Outlet />
        </>
    )
}

export default Products