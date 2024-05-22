import React from 'react'
import tick from '../assets/images/tick.png'

import './Tickbox.css'

const Tickbox = () => {
  return (
    <div className='tickbox'>
        <div className='ticks'>
          <div className="loremtick"><b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, cupiditate.</b></div>
          <div className="tick">
            <img src={tick} alt="img" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, laborum?</p>
          </div>
          <div className="tick">
            <img src={tick} alt="img" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, laborum?</p>
          </div>
          <div className="tick">
            <img src={tick} alt="img" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, laborum?</p>
          </div>
        </div>
        <div className='blankbox'></div>
    </div>
  )
}

export default Tickbox
