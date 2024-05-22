import React from 'react'
import share from '../assets/images/share.png'
import ellipse from'../assets/images/Ellipse.png'
import './Clientcard.css'

const Clientcard = () => {
  return (
    <div className='clientprofile'>
      <div className='clientlorem'>"Credibly innovate granular internal or "organic" sources whereas high standsards in web readiness.</div>
      <div className='info'>
        <div className="profile">
            <img src={ellipse} alt="" />
        </div>
        <div className="nameNpost">
            <div className="name"><b>JIMMY FERRARA</b></div>
            <div className='post'>ceo,Psdfreebies.com</div>
        </div>
      </div>
    </div>
  )
}

export default Clientcard
