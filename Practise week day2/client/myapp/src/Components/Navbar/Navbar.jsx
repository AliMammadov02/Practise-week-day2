import React from 'react'
import "./Navbar.css"
import { Outlet ,Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <div className='Navbar'>
                <h3>Aroma</h3>
                <ul className='Navlist'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="add">Add</Link></li>
                    <li>Blog</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
                <div className='NavButton'>Buy Now</div>

            </div>
        </>
    )
}

export default Navbar