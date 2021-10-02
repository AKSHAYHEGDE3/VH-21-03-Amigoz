import React from 'react'
import BarChart1 from './Graph/BarChart1'
import PieChart from './Graph/PieChart'
import Navbar from "./navbar/Navbar"

const Stats = () => {
    return (
        <div>
            <Navbar />
            <div style={{marginBottom:"2rem"}}>
            <PieChart />
            </div>

            <BarChart1 />
            
            
        </div>
    )
}

export default Stats
