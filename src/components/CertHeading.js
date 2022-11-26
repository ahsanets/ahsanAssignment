import React from 'react'

const CertHeading = (props) => {
  return (
    <div className='Cert-Heading'>
        <h1>  Certificate
            <label> Of {props.Comments}</label>
        </h1>

    </div>
  )
}

export default CertHeading
