import React from 'react'
import {Link} from 'react-router-dom'

export default function NavList({liText , liTo}) {
  return (
   <Link to={liTo} className="Home-Navbar-list">{liText}</Link>
  )
}
