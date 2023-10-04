import React from 'react'
import {BsCircle} from 'react-icons/bs'
import {BsCart2} from 'react-icons/bs'
import {FcDataProtection} from 'react-icons/fc'
import {LiaFileInvoiceDollarSolid} from 'react-icons/lia'
import {SiPowerautomate} from 'react-icons/si'
import {BsShare} from 'react-icons/bs'
import {BsDatabase} from 'react-icons/bs'
import {FiKey} from 'react-icons/fi'
import {FiCreditCard} from 'react-icons/fi'
import {BsHandbag} from 'react-icons/bs'
import {FiBox} from 'react-icons/fi'
import Chart from "react-apexcharts";
import { useState } from 'react';
import {Link} from 'react-router-dom'


const HomePage = () => {
  const [state, setState] = useState({
    options: {
      colors: ["aqua","#aqua"],
      backgroundColors:["aqua"],
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["1Nov","","","","","","","","","30Nov"],
      },
    },
    series: [
      {
        
        data: [49, 42,45,47,45,39,46,49,47,48],
      },
      
    ],
  });
  return (
    <div className='home'>
    <div className='navbar'>
        <h2 className='logo'>LOGO</h2>
        <div className='list'>
        <li>Home</li>
        <li>Features</li>
        <li>Process</li>
        <li>Discover</li>
        <li>Feedback</li>
        </div>

        <button>Login</button>
    </div>

    <div className='main'>
        <div className='about'>
            <h1 className='about_h1'>We help you to find the best solution</h1>
             <br/>
             
             <p>Et has minim elitr intellegat. Mea aeterno eleifend 
antiopam ad, nam no suscipit quaerendum. At nam 
minimum ponderum. Est audiam animal molestiae te. Ex 
duo eripuit mentitum.</p>
             <br/>
             <Link to='/company'>Start free trial</Link>

        </div>
        
        <div className='box'>
            <div className='circle'>
                <li><BsCircle/></li>
                <li><BsCircle/></li>
                <li><BsCircle/></li>
            </div>
            <div className='container'>
                
            </div>

        </div>

        
    </div>
    <div className='features'>
            <div className='title'>
                <h1>We offer a complete <br/> range of features</h1>
            </div>

            <div className='card_container'>
                <div className='card'>
                  <h1 style={{color:"blue"}}><BsCart2/></h1>
                  <h3>Store Integration</h3>
                  <p>Eos tota dicunt democritum no. Has natum 
gubergren ne. Est viris soleat sadipscing cu. Legere 
epicuri insolens eu nec, dicit virtute urbanitas id 
nam, qui in habeo semper eligendi</p>
                </div>
                <div className='card'>
                <h1 style={{color:"blue"}}><FcDataProtection/></h1>
                  <h3>Data Protection</h3>
                  <p>Ne nam phaedrum consequat, adhuc aliquid ea pri, 
eum eligendi incorrupte referrentur in. Vix ad 
senserit salutandi argumentum. Ei eam definiebas 
reformidans, exerci persecuti no ius.</p>
                </div>
                <div className='card'>
                <h1 style={{color:"blue"}}><LiaFileInvoiceDollarSolid/></h1>
                  <h3>Invoice generator</h3>
                  <p>Assum suavitate ea vel, vero erat doming cu cum. 
Zril ornatus sea cu. Pro ex integre pertinax. Cu cum 
harum paulo legendos, mei et quod enim 
mnesarchum, habeo affert laoreet sea ei.</p>
                </div>
                <div className='card'>
                <h1 style={{color:"blue"}}><SiPowerautomate/></h1>
                  <h3>Auto Responder</h3>
                  <p>Assum suavitate ea vel, vero erat doming cu cum. 
Zril ornatus sea cu. Pro ex integre pertinax. Cu cum 
harum paulo legendos, mei et quod enim 
mnesarchum, habeo affert laoreet sea ei.</p>
                </div>
                <div className='card'>
                <h1 style={{color:"blue"}}><BsShare/></h1>
                  <h3>Social Plugin</h3>
                  <p>Eos tota dicunt democritum no. Has natum 
gubergren ne. Est viris soleat sadipscing cu. Legere 
epicuri insolens eu nec, dicit virtute urbanitas id 
nam, qui in habeo semper eligendi.</p>
                </div>
                <div className='card'>
                <h1 style={{color:"blue"}}><BsDatabase/></h1>
                  <h3>Data Backup</h3>
                  <p>Ne nam phaedrum consequat, adhuc aliquid ea pri, 
eum eligendi incorrupte referrentur in. Vix ad 
senserit salutandi argumentum. Ei eam definiebas 
reformidans, exerci persecuti no ius</p>
                </div>
            </div>
        </div>
        <div className='stats'>
        <div className='about'>
            <h2 className='about_h1'>Product Statistic</h2>
             <br/>
             
             <p>Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam 
no suscipit quaerendum. At nam minimum ponderum. Est audiam 
animal molestiae te. Ex duo eripuit mentitum.</p>
             <br/>
             <button>Learn more</button>

        </div>
        <div className='chart'>
        <Chart
            options={state.options}
            series={state.series}
            type="area"
            width="670"
            height="290"
          />
        </div>
          
        </div>
        <div className='info'>
        <div className='box'>
            <div className='circle'>
                <li><BsCircle/></li>
                <li><BsCircle/></li>
                <li><BsCircle/></li>
            </div>
            <div className='container'>
                
            </div>

        </div>
        <div className='card_container2'>
        <div className='card'>
                <h1 style={{color:"blue",textAlign:"left"}}><BsHandbag/></h1>
                  
                  <p style={{textAlign:"left"}}>Et has minim elitr intellegat. Mea 
aeterno eleifend antiopam ad, 
nam no suscipit quaerendum.</p>
                </div>
                <div className='card'>
                <h1 style={{color:"blue",textAlign:"left"}}><FiKey/></h1>
                  
                  <p style={{textAlign:"left"}}>At nam minimum ponderum. Est 
audiam animal molestiae te. Ex 
duo eripuit mentitum.</p>
                </div>
                <div className='card'>
                <h1 style={{color:"blue",textAlign:"left"}}><FiBox/></h1>
                  
                  <p style={{textAlign:"left"}}>Vidisse oblique ei has, eos eu 
atomorum erroribus cotidieque, 
mazim postea ne vel.</p>
                </div>
                <div className='card'>
                <h1 style={{color:"blue",textAlign:"left"}}><FiCreditCard/></h1>
                  
                  <p style={{textAlign:"left"}}>Ea aperiri ponderum ullamcorper 
sit, verear offendit imperdiet nam 
eu, liber delicata tractatos ad.</p>
                </div>

        </div>
        </div>
      <div style={{marginTop:"160px",backgroundColor:"lightgray",height:"300px"}}>
        <h1 style={{marginBottom:"30px",paddingTop:"70px"}}>Ready to get started?</h1>
        <p style={{color:"gray"}}>Take control of your Business Data.</p>
        <p style={{color:"gray"}}>Try saas to make your business better.</p>
        <button style={{width:"170px"}}>Get Started</button>
      </div>
      <div style={{backgroundColor:"#2C2D2D",height:"60px"}} className='footer'>
        <span style={{color:"gray"}}> BrandName.All rights reserved.</span>
      </div>
    </div>
  )
}

export default HomePage
