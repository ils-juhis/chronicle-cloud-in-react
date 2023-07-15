import React, { useState } from 'react'
import PieChart from '../Graph/PieChart'
import './GraphCard.scss'
import { schoolData } from '../../../data/graphData';

function PieChartCard() {
  const [selectedSchool, setSelectedSchool] = useState(0);
  return (
    <div>
      <div className="graphs pie-chart">
        <div className="heading d-flex justify-content-between"> 
            <div>Data Usage</div>
            <select onChange={(e)=>{setSelectedSchool(e.target.value)}} className="form-select form-select-sm" id="select-school" aria-label=".form-select-sm example" style={{width: "fit-content", fontSize: "12px"}}>
              {
                schoolData.map((item, index)=>{
                  return (<option key={index} value={index}>{schoolData[index].schoolName}</option>)
                })
              }
            </select>
        </div>
        <div className="position-relative">
            <div>
                <PieChart selectedSchool={schoolData[selectedSchool]}/>
            </div>
        </div>
      </div>
    </div> 
  )
}

export default PieChartCard