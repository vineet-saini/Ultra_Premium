import React from 'react'
import './Header.css'
import gmail from '../assets/images/gmail.png'
import clock from '../assets/images/clock.png'
import phone from '../assets/images/phone.png'

const Header = () => {
  return (
    <div>
      <div className='top'>
      <div className='top1'>
        <div className='gmail'>
          <img src={gmail} alt="" />
          <p>Pinar@gmail.com</p>
        </div>
        <div className='phone'>
          <img src={phone} alt="" />
          <p>79654125565</p>
        </div>
        <div className='days'>
          <img src={clock} alt="" />
          <p>Mon-Sat : 9AM-6PM</p>
        </div>
      </div>
      <div className='top2'>
        <div className='login'>LOGIN</div>
        <div>|</div>
        <div className='support'>SUPPORT</div>
        <div>|</div>
        <div className='language'>LANGUAGES</div>
      </div>
    </div>
    </div>
  )
}

export default Header
