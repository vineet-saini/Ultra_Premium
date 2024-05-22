import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div className='card'>
        <img src={props.img} alt=""  />
        
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam similique ullam assumenda! Nemo, voluptates deserunt. Inventore quis sunt dolor optio.</p>
    </div>
  )
}

export default Card
