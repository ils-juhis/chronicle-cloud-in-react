import React from 'react'
import './Home.scss'
import {countData} from '../../data/countData'
import CountCard from '../../components/Dashboard/CountCard/CountCard'
import SchoolTable from '../../components/Dashboard/SchoolTable/SchoolTable'

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
              
        </section>
      </div>
        <section>
          {/* <SchoolTable/> */}
        </section>
    </div>
  )
}

export default Home