import React from 'react'
import './App.css'

function Card(props) {
  return (
    <div className='card'>
        <img src={props.img} alt="" />
        <h1>Nature {props.title} image</h1>
    </div>
  )
}

export default Card