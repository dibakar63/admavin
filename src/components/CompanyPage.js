import React from 'react'
import {BsHandbag} from 'react-icons/bs'
import {SiGooglemarketingplatform} from 'react-icons/si'
import {TbSettingsFilled} from 'react-icons/tb'

const CompanyPage = () => {
  return (
    <div className='home'>
    <div className='navbar'>
        <h2 className='logo'>LOGO</h2>
        <div className='list'>
        
        <li>Features</li>
        <li>Pricing</li>
        <li>Contact</li>
        
        </div>
        <div>
        <span style={{color:"blue",marginRight:"20px",fontSize:"bold"}} >Login</span>
        <button style={{width:"110px"}}>Start now</button>
        </div>
    </div>
    <div className='about_2'>
        <h1>Simplify your online shoping for <br/>free this month!</h1>
        <p>Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.</p>
        <p>At nam minimum ponderum. Est audiam animal molestiae te.</p>
        <div className='btn_2'>
        <button className='b_btn'>Start free trial</button>
        <button style={{marginLeft:"30px",width:"130px"}}> Learn more</button>
        </div>
        
    </div>
    <div className='about_2'>
    <h1 style={{marginTop:"200px"}}>Grow your business with better Shipping</h1>
    <p>We help the world’s leading organizations follow their shipping</p>

    </div>
    <div className='container_2'>
      <div className='card'>
      <h1 style={{color:"blue"}}><BsHandbag/></h1>
                  <h3>Shipping Communication</h3>
                  <p>At eripuit signiferumque sea, vel ad mucius molestie, 
cu labitur iuvaret vulputate sed.</p>
                  <h4 style={{color:"blue"}}>Discover</h4>
      </div>
      <div className='card'>
      <h1 style={{color:"blue"}}><SiGooglemarketingplatform/></h1>
                  <h3>Marketing</h3>
                  <p>At eripuit signiferumque sea, vel ad mucius molestie, 
cu labitur iuvaret vulputate sed.</p>
                  <h4 style={{color:"blue"}}>Discover</h4>
      </div>
      <div className='card'>
      <h1 style={{color:"blue"}}><TbSettingsFilled/></h1>
                  <h3>Logistic Perfomance</h3>
                  <p>At eripuit signiferumque sea, vel ad mucius molestie, 
cu labitur iuvaret vulputate sed.</p>
                  <h4 style={{color:"blue"}}>Discover</h4>
      </div>
    </div>
      
    </div>
  )
}

export default CompanyPage
