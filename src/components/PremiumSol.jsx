import React from 'react'
import'./PremiumSol.css'
import BlueBox from '../assets/images/BlueBox.png'

const PremiumSol = () => {
  return (
    <div className='premium-SolBox'>
        <div className='modernBox'>
            <div className='modernWeb'>
                <b>Premium Solution <br /> for a Modern Website</b>
            </div>
            <div className="psd">
                Psdfreebies.com
            </div>
            <div className='lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cumque sequi adipisci beatae earum, natus voluptate repellat enim aliquid nam?</div>
        </div>
        
        <div className='speech-bubble'>
            <div className='sb-lorem'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, omnis laboriosam facere doloribus nulla fugit aspernatur rem unde delectus cumque possimus.</p>
            </div>
            <div className='inputdiv'><input className='input' type="text" placeholder='Enter email address' defaultValue={'enter email address'}/></div>
            <div className='btndiv'><button className='btnjoin'><b>Join</b></button></div>
        </div>
    </div>
  )
}

export default PremiumSol
