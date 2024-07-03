import React from 'react'
import img from "./Images/shos.png"
import img1 from "./Images/flip.jpeg"
import img2 from "./Images/amazon.png"
function Middle() {
  return(
    <div className="main">
        <div className="main-text">
        <h1>YOUR FEET <br/>DESERVE<br/>THE DESERVE BEST</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, impedit sunt perferendis enim mollitia numquam iste vero dicta itaque ab, nihil amet doloremque quis ex?</p>
        <div className="btn-button">
            <button className='btn'>Shop now</button>
            <button className='btn'>Category</button>
        </div>
        <div>
            <p>Also  Available on</p>
        </div>
        <div className="link-image">
            <img src={img1} className="mm" alt="mm" />
            <img src={img2} className="mm" alt="nn" />
        </div>
        </div>
        <img src={img}alt="" />
    </div>
  ) 
}

export default Middle