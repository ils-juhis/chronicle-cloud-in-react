import React from 'react'
import {StackedBarGraph} from '../Graph/StackedBarGraph'
import './GraphCard.scss'

function BarGraphCard() {
  return (
    <div>
        <div className="graphs bargraph">
            <div className="heading d-flex justify-content-between"> 
                <div>
                    <span>
                        <a className="active" href="#">Roster</a>
                    </span> | 
                    <span>
                        <a  href="#">Teachers</a>
                    </span>
                </div>
                <div id="bar-legend-box">
                    <button id="active"><span></span> <span></span></button>
                    <button id="inactive"><span></span> <span></span></button>
                </div>
            </div>
            <div className="position-relative">
                <StackedBarGraph />
            </div>
        </div>
    </div>
  )
}

export default BarGraphCard