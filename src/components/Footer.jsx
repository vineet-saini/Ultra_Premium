import React from 'react'
import './Footer.css'
import twitter from '../assets/images/twitter.png'
import facebook from '../assets/images/facebook.png'
import youtube from '../assets/images/youtube.png'
import linkedin from '../assets/images/linkedin.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='aboutfooter'>
            <div className='up-logo'>
                <b>ULTRA<span>PREMIUM</span></b>
            </div>
            <div className="psdfooter">
                <p>Psdfreebies.com</p>
            </div>
            <div className="footerlorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolorem eveniet nam, nesciunt iusto aliquid? Veniam, soluta? In assumenda voluptatibus et consequatur maiores officiis ex? Quo voluptas aspernatur distinctio? Animi!</div>
      </div>
      <div className="links">
        <a href="https://www.facebook.com"><img src={facebook} alt="" /></a>
         &ensp;
         <a href="https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJteCI6IjIifQ%3D%3D%22%7D"><img src={twitter} alt="" /></a>
         &ensp;
         <a href="https://www.linkedin.com"><img src={linkedin} alt="" /></a>
         &ensp;
         <a href="https://www.youtube.com/"><img src={youtube} alt="" /></a>
      </div>
    </div>
    
  )
}

export default Footer
