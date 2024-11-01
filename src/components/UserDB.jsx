import React from 'react'
import UserHeader from './UserHeader'

export default function UserDB() {
  return (
    <div>
        <div>
        <UserHeader />
        </div>
        <div className='UserDB_SideBar'>
            <ul className='UserDB_SideBar_Ul'>
                <li className='UserDB_SideBar_Li'>About Me</li>
                <li className='UserDB_SideBar_Li'>Current Request</li>
                <li className='UserDB_SideBar_Li'>History</li>
                <li className='UserDB_SideBar_Li'>Change Password</li>
            </ul>
        </div>
    </div>
  )
}
