import React from 'react'
import {FaRegHospital} from "react-icons/fa"
import {SlLock} from "react-icons/sl"
import {HiOutlineMail} from "react-icons/hi"
import {GiModernCity} from "react-icons/gi"
import Options from '../Options'
import Selector from '../Selector'

function SignUpAdmin() {
  return (
            <div className='Signup-Form-Div'>
            <form className='Signup-Form'>
            <div className='Sign-Input-Div'>
            {/* <label className='Signup-Form-Label'>Hospital Name <FaRegHospital /></label> */}
            <input type="text" placeholder='Hospital Name' className='Signup-Form-Input' required />
            <br />
            {/* <label className='Signup-Form-Label'>Email Address <HiOutlineMail /></label> */}
            <input type="email" placeholder='Email Address' className='Signup-Form-Input' required  />
            </div>
            <div className='Sign-Input-Div'>
            {/* <label className='Signup-Form-Label'>Password <SlLock /></label> */}
            <input type="password" placeholder='Password' className='Signup-Form-Input'  required />
            <br />
            {/* <label className='Signup-Form-Label'>Confirm Password <SlLock /></label> */}
            <input type="password" placeholder='Confirm Password' className='Signup-Form-Input' required />
            
            </div>
            <div className='Sign-Input-Div'>
            {/* <label className='Signup-Form-Label'>City <GiModernCity /></label> */}
            <select className='Signup-City-Selector' required>
              {Options.map((link , index) => {
                return (
                  <Selector optText={link.optText} key={index} />
                  )
              })}
            </select><br />
             {/* <label className='Signup-Form-Label'>ID</label> */}
            <input type="text" placeholder='ID' className='Signup-Form-Input'minLength={14} maxLength={14} required />
            <br />
            {/* <label className='Signup-Form-Label'>Tele. Number</label> */}
            <input type="text" placeholder='Tele. Number' className='Signup-Form-Input' minLength={7} maxLength={7} required/>
            </div><br /> 
             <button className='Signup-btn'>Submit</button>
             <button className='ccs'>kkk</button>
          </form>
        </div>
  )
}

export default SignUpAdmin