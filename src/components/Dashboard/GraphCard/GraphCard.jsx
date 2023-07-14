import React from 'react'

function GraphCard({children}) {
  return (
    <>
        <div class="row g-4 mb-4">
            <div class="col-12 col-xl-6">
                <div class="graphs">
                    <div class="heading d-flex justify-content-between"> 
                        <div>
                            <span>
                                <a class="active" href="#">Roster</a>
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
                    <div class="position-relative">
                        <canvas id="bar-chart" ></canvas>
                    </div>
                </div>
            </div>
        </div>
    </> 
  )
}

export default GraphCard