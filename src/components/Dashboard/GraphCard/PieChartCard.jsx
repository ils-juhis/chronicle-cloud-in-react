import React from 'react'
import {PieChart} from '../Graph/PieChart'
import './GraphCard.scss'

function PieChartCard() {
  return (
    <div>
      <div className="graphs">
        <div className="heading d-flex justify-content-between"> 
            <div>Data Usage</div>
            <select className="form-select form-select-sm" id="select-school" aria-label=".form-select-sm example" style={{width: "fit-content", fontSize: "12px"}}>
                
            </select>
        </div>
        <div className="position-relative">
            <div>
                <PieChart/>
            </div>
        </div>
      </div>
    </div> 
  )
}

export default PieChartCard