import React from 'react'
import {Link} from 'react-router-dom'

export default function NavList({UserliText , UserliTo}) {
  return (
   <Link to={UserliTo} className="Home-Navbar-list">{UserliText}</Link>
  )
}