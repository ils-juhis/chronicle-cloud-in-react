import React from 'react'
import './Home.scss'
import {countData} from '../../data/countData'
import CountCard from '../../components/Dashboard/CountCard/CountCard'
import SchoolTable from '../../components/Dashboard/SchoolTable/SchoolTable'
import { StackedBarGraph } from '../../components/Dashboard/Graph/StackedBarGraph'
import { PieChart } from '../../components/Dashboard/Graph/PieChart'
import BarGraphCard from '../../components/Dashboard/GraphCard/BarGraphCard'
import PieChartCard from '../../components/Dashboard/GraphCard/PieChartCard'

function Home() {
  
  return (
    <div id='home'>
      <div>
        <section className="smallbox-container">
          <div className="row g-4 mb-4" id="count-box">
            {
              countData.map((item)=>{
                return (
                  <CountCard item={item}/>
                )
              })
            }
          </div>
        </section>
        <section class="graph-container">
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