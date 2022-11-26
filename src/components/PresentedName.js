import React from 'react'

const PresentedName = (props) => {
  return (
    <div className='Present-NameSec'>
        <h3> Proudly Presented to </h3>
        <strong class="Present-Name">  {props.Name} {props.LastName}  </strong>
    </div>
  )
}

export default PresentedName
