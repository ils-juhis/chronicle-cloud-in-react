import React from 'react'
import './FormCard.scss'

function FormCard({children, name, info}) {
  return (
    <div className="lrf-form ms-lg-5 mx-auto">
      <div className="lrf-card " >
        <div className="text-uppercase heading">
          {name}
        </div>
        <div className="content">
          {children}
        </div>
      </div>
      {
        info ?
        <div className="info pt-3 text-center">
          <div>  © 2022 All rights reserved | Built for Chronicle Cloud. </div> 
          <div className="fw-bold"> Powered with Synapse Xtreme Engine (SXE) </div>
        </div>
        :
        null
      }
    </div>

  )
}

export default FormCard