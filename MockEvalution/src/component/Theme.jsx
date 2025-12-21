import React from 'react'

export default function Theme({toggletheme}) {
  return (
    <div>
     <button className='theme-btn' onClick={toggletheme}>Change The Theme!</button> 
    </div>
  )
}
