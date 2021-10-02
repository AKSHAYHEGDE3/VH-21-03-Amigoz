import React from 'react'
import { Bar,Pie} from 'react-chartjs-2'

const BarChart1 = () => {
  return (
    <div>
          
      <div>
        
        <Bar
      data={{
        labels:['Jan','Feb','Mar','Apr','May','Jun','Jul', 'Aug', 'Sep', 'Oct',  'Nov', 'Dec'],
        datasets:[{
          label:'Home Expense',
          data:[1,2,3,4,5,6,7,8,9,2,3,4],
          backgroundColor:'red',
          barThickness:12
        },
        {
          label:'Entertainment Expense',
          data:[4,5,6,7,4,3,2,8,9,3,4,5],
          backgroundColor:'green',
          barThickness:12
        },
        {
          label:'Transport Expense',
          data:[9,3,4,5,2,3,9,8,7,6,5,4],
          backgroundColor:'yellow',
          barThickness:12
        },
        {
          label:'Medical Expense',
          data:[1,2,3,4,5,6,7,8,9,2,3,4],
          backgroundColor:'orange',
          barThickness:12
        },
        ]
      }}
      options={{
        tooltips:{
          mode:'index',
          callbacks:{
            label:function(toolTipItem){
              return ("Revenue: $"+toolTipItem.value)
            }
          }

        },
        scales:{
          xAxes:[
            {
              gridLines:{
              color:'cyan'
            },
              scaleLabel:{
                labelString:'Months',
                display:true,
                // fontColor:'blue',
                fontSize:20
              },
              ticks:{
                fontColor:'green'
              }
            }
          ],
          yAxes:[
          {
            gridLines:{
              color:'cyan'
            },
            scaleLabel:{
                labelString:'Revenue',
                display:true,
                // fontColor:'blue',
                fontSize:20,
              },
            ticks:{
              beginAtZero:true,
              fontColor:'green',
              
            }
          }
          ]
        }
      }}
      >

      </Bar>
    
      </div>
    
    </div>
  )
}

export default BarChart1