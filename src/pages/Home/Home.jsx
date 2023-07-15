import React from 'react'
import './Home.scss'
import {countData} from '../../data/countData'
import CountCard from '../../components/Dashboard/CountCard/CountCard'
import SchoolTable from '../../components/Dashboard/SchoolTable/SchoolTable'
import BarGraphCard from '../../components/Dashboard/GraphCard/BarGraphCard'
import PieChartCard from '../../components/Dashboard/GraphCard/PieChartCard'

function Home() {
  
  return (
    <div id='home'>
      <div>
        <section className="smallbox-container">
          <div className="row g-4 mb-4" id="count-box">
            {
              countData.map((item, i)=>{
                return (
                  <CountCard item={item} key={i}/>
                )
              })
            }
          </div>
        </section>
        <section className="graph-container">
          <div className="row g-4 mb-4">
            <div className="col-12 col-xl-6 graph-card">
              <BarGraphCard/>
            </div>
            <div className="col-12 col-xl-6 graph-card">
              <PieChartCard/>
            </div>
          </div>
        </section>
      </div>
        <section>
          <SchoolTable/>
        </section>
    </div>
  )
}

export default Home