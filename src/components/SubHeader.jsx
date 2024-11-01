import React from 'react'

function SubHeader(props) {
  return (
    <div className='SubHeader'>
        <h3 className='SubHeader_title'>{props.title}</h3>
        <p className='SubHeader_desc'>{props.desc}</p>
    </div>
  )
}

export default SubHeader