import React from 'react'
import { Pie, defaults } from 'react-chartjs-2'

// defaults.global.tooltips.enabled = false
// defaults.global.legend.position = 'bottom'

const PieChart = () => {
  return (
    <div>
      <Pie
        data={{
          labels: ['Home Expense', 'Entertainment Expense', 'Vehicles Expense', 'Medical Expense'],
          datasets: [
            {
              
              data: [12, 19, 3, 5],
              backgroundColor: [
                'Red', 'Green', 'Yellow', 'Orange',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
            // {
            //   label: 'Quantity',
            //   data: [47, 52, 67, 58, 9, 50],
            //   backgroundColor: 'orange',
            //   borderColor: 'red',
            // },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
        //  
        //       {
        //         ticks: {
        //           beginA scales: {
        //     yAxes: [tZero: true,
        //         },
        //       },
        //     ],
        //   },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </div>
  )
}

export default PieChart