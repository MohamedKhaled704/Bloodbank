import React from 'react'
import theimgeee from "../imgs/OIP.jfif"
import theimgeee2 from "../imgs/gettyimages-1307735164-612x612.jpg"
import Roles from './SignUp/Roles'
import { Link } from 'react-router-dom'

function SignUpAD() {
  return (
    <div>
         <div className='Signup-Page'>
      <div className='Signup-container'>
      {/* <div className='box1'>
        <div className='Signup-img1'>
        <img src={theimgeee2} alt="heart in hands" className='Signup-img1' />
        </div>
        <div>
          <p className='Signup-p'>Blood Donation refers to a practice where people donate their blood to people so it helps them with their health problems</p>
        </div>
        <div className='Signup-Div-img2'>
        <img src={theimgeee} alt="heart in hands" className='Signup-img2' />
        </div>
        <div>
          <p className='Signup-p'> Blood is one of the most essential fluids of our body that helps in the smooth functioning of our body. </p>
        </div>
      </div> */}
      <div className='box2'>
        <div className='Signup-H1-Div'>
          <div className='Signup-Back-btn-Div'>
          <Link to='/'><button  className='Signup-Back-btn'>Home</button></Link>
          </div>
          <div className='Signup-H1-Div'>
        <h1 className='Signup-H1'>Sign Up </h1>
        </div>
        </div>
        <div className='Signup-Form-Div'>

        <Roles/>
        


        </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default SignUpAD