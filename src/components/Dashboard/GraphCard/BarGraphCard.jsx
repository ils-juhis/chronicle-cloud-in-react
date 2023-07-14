import React, { useState } from 'react'
import StackedBarGraph from '../Graph/StackedBarGraph'
import './GraphCard.scss'
import { schoolData } from '../../../data/graphData';

function BarGraphCard() {

    const [active, setActive] = useState("teachers")

  return (
    <div>
        <div className="graphs bargraph">
            <div className="heading d-flex justify-content-between"> 
                <div>
                    <span onClick={()=>{setActive("roster")}}>
                        <a className={active==="roster" ? "active": null} href="#">Roster</a>
                    </span> | 
                    <span onClick={()=>{setActive("teachers")}}>
                        <a  href="#" className={active==="teachers" ? "active": null}>Teachers</a>
                    </span>
                </div>
                <div id="bar-legend-box" >
                    <button id="active"><span style={{backgroundColor: "#F9AC32"}}></span> <span>Active</span></button>
                    <button id="inactive"><span style={{backgroundColor: "#EEEEEE"}}></span> <span>Inactive</span></button>
                </div>
            </div>
            <div className="position-relative">
                <StackedBarGraph schoolData={schoolData} category={active}/>
            </div>
        </div>
    </div>
  )
}

export default BarGraphCard