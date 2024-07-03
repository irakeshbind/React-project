import React from 'react'
import './App.css'
function Navigationbar() {
  return (
    <div className="navigation">
            <nav className='container'>
                <div className="logo">
                    <h1>RAKESH</h1>
                </div>
                <ul>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Location</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <button className='btn'>Login</button>
            </nav>

            </div>
           
  )
}

export default Navigationbar