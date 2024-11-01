import React, { useState } from 'react'
import SignUpAdmin from './SignUpAdmin';
import SignUPUser from './SignUPUser'
import { Link } from 'react-router-dom'

function Roles() {

  const [user ,setUser] = useState("");

  const original =( 
  <div>
  <div className='SignUpQues'>
            <p className='SignUpQues-P'>Sign up as admin or user ?</p>
            <button className='SignUpChoice' onClick={()=>{setUser("user")}}>User</button>
            <button className='SignUpChoice'  onClick={()=>{setUser("admin")}}>Admin</button>
        </div>
         <div className='SignUp_Q_Div'>
         <p className='SignUp_Q_P'>Already have an Account!.. </p>
         <Link to="/Login"><button onClick={""} className='SignUp_Q_btn'>Sign In</button></Link>
       </div>
       </div>
  )

  return (
    <div className='SignUpBackDiv'>
    <div className='SignUpBackDiv'>
      { 
        user === "user" ?
          <>
            <SignUPUser/>
            <button className='SignUpBack' onClick={() => setUser("")}>Go Back</button>
          </>
          : 
         user === "admin"?
          <>
            <SignUpAdmin/>
            <button className='SignUpBack' onClick={() => setUser("")}>Go Back</button>
          </>
          : original 
      }
    </div>
    {/* <div className='SignUp_Q_Div'>
      <p className='SignUp_Q_P'>Already have an Account ?.. Login from here ..</p>
      <Link to="/Login"><button onClick={""} className='SignUp_Q_btn'>Sign In</button></Link>
    </div> */}
    </div>
  )
}

export default Roles;
