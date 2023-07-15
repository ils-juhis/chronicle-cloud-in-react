import React from 'react'
import './CountCard.scss'

function CountCard({item}) {
  return (
    <div className="count-item col-sm-6 col-xxl-3">
        <div className="d-flex">
            <div>
                <div> {item.heading}</div>
                <div> {item.activeCases} <span>{item.status}</span></div>
                <div>{item.totalText}: {item.total}</div>
            </div>
            <div className="icon d-flex align-items-center justify-content-center">
                <img src={item.path} alt=""/>
            </div>
        </div>
    </div>

  )
}

export default CountCard