import React from 'react'
import {SlUser} from "react-icons/sl"
import {SlLock} from "react-icons/sl"
import Signup from './Signup';
import { Link } from 'react-router-dom';
import { GiOnTarget } from 'react-icons/gi';
import {FaFacebook , FaTwitter} from "react-icons/fa"


export default function Login(onClick , requiredInputs) {
  const handleClick = () => {
    let isValid = true;
    requiredInputs.forEach(input => {
      if (!input.value) {
        isValid = false;
      }
    });
    if (isValid) {
     onClick= <Link to='/' />
    }
  }
  return (
    <div className='Login-Page'>
        {/* <div className='Login-Body'>
            <form className='Login-Form'>
                <label className='Login-Label'><SlUser /> National ID</label>
                <input type="text" className='Login-input' required  />
                <label className='Login-Label'>Password <SlLock /></label>
                <input type="password" className='Login-input' required />
                <button className='Login-btn' onClick={handleClick}>Login</button>
                <a href='' className='Login-anchor'> forgot your password ?.. </a>
                <Link to='/Sign Up' className='Login-anchor'> Donot have account?..Sign Up Here ..! </Link>
            </form>
        </div> */}
        <div class="container">
	<div class="screen">
		<div class="screen__content">
			<Link to='/'><button className='Screen_Home_btn'>Home</button></Link>
			<form class="login">
				<div class="login__field">
					<input type="text" class="login__input" placeholder="User name / Email" />
				</div>
				<div class="login__field">
					<input type="password" class="login__input" placeholder="Password" />
				</div>
				<button class="button login__submit">
					<Link to='/UserDB'><span className='button__text'>Log In Now</span></Link>
				</button>				
			</form>
			<div class="social-login">
				<h3 className='social-login-h3'>log in via</h3>
				<div className='social-login-icons'>
					<a href="#"><FaFacebook  /> </a>
					<a href="#"><FaTwitter /></a>
				</div>
			</div>
		</div>
		<div class="screen__background">
			<span class="screen__background__shape screen__background__shape4"></span>
			<span class="screen__background__shape screen__background__shape3"></span>		
			<span class="screen__background__shape screen__background__shape2"></span>
			<span class="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
	<div className='Login_help'>
	    <Link to='/Sign Up' className='Login_help_Q'>- Don’t have an account! sign up </Link>
		<a href='' className='Login_help_Q'>- Forget your password !..</a>
	</div>
</div>
    </div>
  )
}
