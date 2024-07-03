import React from 'react'
import './App.css'
import Card from './Card'
import Img1 from  "./Images/img11.jpg"
import Img2 from "./Images/img15.jpg"
import Img3 from "./Images/img22.jpg"
import Img4 from "./Images/imgh.jpg"
import Img5 from "./Images/su.jpeg"
import Img6 from "./Images/img15.jpg"

function  Mainpage() {
  return (
  <>
        <h1 className='heading'>Image Gallery</h1>
        <div className='cardComp'>
        <Card title="1" img={Img1}/>
        <Card title="2" img={Img2}/>
        <Card title="3" img={Img3}/>
        <Card title="4" img={Img4}/>
        <Card title="5" img={Img5}/>
        <Card title="6" img={Img6}/>
    </div>
    
    </>
  )
}

export default  Mainpage