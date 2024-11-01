import React from 'react'
import {SlUser} from "react-icons/sl"
import {SlLock} from "react-icons/sl"
import {HiOutlineMail} from "react-icons/hi"
import {GiModernCity} from "react-icons/gi"
import {MdBloodtype} from "react-icons/md"
import {BsGenderMale,BsGenderFemale} from "react-icons/bs"
import Options from '../Options'
import Selector from '../Selector'
import BloodOption from '../BloodOption'
import BloodTypes from '../BloodTypes'

function SignUPUser() {
  return (
            <div className='Signup-Form-Div'>
            <form className='Signup-Form'>
            <div className='Sign-Input-Div'>
            {/* <label className='Signup-Form-Label'>Full Name <SlUser /></label> */}
            <input type="text"placeholder='Full Name' className='Signup-Form-Input' required />
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
             {/* <label className='Signup-Form-Label'>National ID</label> */}
            <input type="text" placeholder='National ID' className='Signup-Form-Input'minLength={14} maxLength={14} required />
            <br />
            {/* <label className='Signup-Form-Label'>Phone Number</label> */}
            <input type="text" placeholder='Phone Number' className='Signup-Form-Input' minLength={11} maxLength={11} required/>
            </div> 
            <div className='Sign-Input-Div'>
            {/* <label className='Signup-Form-Label'> BirthDate</label> */}
            <input type="date" className='Signup-birthday-Selector' required />
            </div>
            <div className='Sign-Input-Div'>
            {/* <label className='Signup-Form-Label'>Blood type <MdBloodtype className='MdBloodtype' /> </label> */}
            <select className='Signup-Blood-Selector' required  >
            {BloodTypes.map((link , index) => {
              return (
                <BloodOption typeText={link.typeText} key={index} />
              )
            })}
            </select>
            </div>
            {/* <label className='Signup-Form-Label'> Gender <BsGenderMale /> / <BsGenderFemale /></label> */}
            <div className='Sign-Input-Gender'>
            <div>
            <input type="radio" name="Gender" value="Male" />
            <label>Male</label>
            </div>
            <div>
            <input type="radio" name="Gender" value="Female" />
            <label>Female</label>
            </div>
            </div> 
             <button className='Signup-btn'>Submit</button>
          </form>
        </div>
  )
}

export default SignUPUser