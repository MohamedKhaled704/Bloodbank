import React from 'react'
import {SlUser} from "react-icons/sl"
import {SlLock} from "react-icons/sl"
import {HiOutlineMail} from "react-icons/hi"
import {GiModernCity} from "react-icons/gi"
import {MdBloodtype} from "react-icons/md"
import {BsGenderMale,BsGenderFemale} from "react-icons/bs"
import {IoIosArrowRoundBack} from "react-icons/io"
import theimgeee from "../imgs/OIP.jfif"
import theimgeee2 from "../imgs/gettyimages-1307735164-612x612.jpg"
import Options from './Options'
import Selector from './Selector'
import BloodOption from './BloodOption'
import BloodTypes from './BloodTypes'
import { Link } from 'react-router-dom'

export default function Signup() {

  return (
    <div className='Signup-Page'>
      <div className='Signup-container'>
      <div className='box1'>
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
      </div>
      <div className='box2'>
        <div className='Signup-H1-Div'>
          <div className='Signup-Back-btn-Div'>
          <Link to='/Login' className='Signup-Back-btn'><IoIosArrowRoundBack/></Link>
          </div>
          <div className='Signup-H1-Div'>
        <h1 className='Signup-H1'>Sign Up </h1>
        </div>
        </div>
        <div className='Signup-Form-Div'>
          <form className='Signup-Form'>
            <div className='Sign-Input-Div'>
            <label className='Signup-Form-Label'>Full Name <SlUser /></label>
            <input type="text" className='Signup-Form-Input' required />
            <label className='Signup-Form-Label'>Email Address <HiOutlineMail /></label>
            <input type="email" className='Signup-Form-Input' required  />
            </div>
            <div className='Sign-Input-Div'>
            <label className='Signup-Form-Label'>Password <SlLock /></label>
            <input type="password" className='Signup-Form-Input'  required />
            <label className='Signup-Form-Label'>Confirm Password <SlLock /></label>
            <input type="password" className='Signup-Form-Input' required />
            
            </div>
            <div className='Sign-Input-Div'>
            <label className='Signup-Form-Label'>City <GiModernCity /></label>
            <select className='Signup-City-Selector' required>
              {Options.map((link , index) => {
                return (
                  <Selector optText={link.optText} key={index} />
                  )
              })}
            </select>
             <label className='Signup-Form-Label'>National ID</label>
            <input type="text" className='Signup-Form-Input'minLength={14} maxLength={14} required />
            <label className='Signup-Form-Label'>Phone Number</label>
            <input type="text" className='Signup-Form-Input' minLength={11} maxLength={11} required/>
            </div> 
            <div className='Sign-Input-Div'>
            <label className='Signup-Form-Label'> BirthDate</label>
            <input type="date" className='Signup-Form-Input' required />
            </div>
            <div className='Sign-Input-Div'>
            <label className='Signup-Form-Label'>Blood type <MdBloodtype className='MdBloodtype' /> </label>
            <select className='Signup-Blood-Selector' required  >
            {BloodTypes.map((link , index) => {
              return (
                <BloodOption typeText={link.typeText} key={index} />
              )
            })}
            </select>
            </div>
            <label className='Signup-Form-Label'> Gender <BsGenderMale /> / <BsGenderFemale /></label>
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
      </div>
      </div>
    </div>
  )
}
