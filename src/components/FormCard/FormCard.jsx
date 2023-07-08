import React from 'react'
import './FormCard.scss'

function FormCard({children, name}) {
  return (
    <div className="lrf-form">
      <div className="lrf-card ms-lg-5 mx-auto" >
        <div className="text-uppercase heading">
          {name}
        </div>
        <div className="content">
          {children}
        </div>
      </div>
    </div>

  )
}

export default FormCard