import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

//pie chart


export default function PieChart({selectedSchool}) {
  let pieXValues = ["Multimedia", "Audio Notes", "Notes","Free Space"];
let {multimedia, audioNotes, notes, free} = selectedSchool;
let pieYValues = [multimedia, audioNotes, notes, free];
let barColors = ["#286BCB", "#7DB0F7", "#CCCCCC", "#386CB5"];

 const data = {
  labels: pieXValues,
  datasets: [
    {
      data: pieYValues,
      backgroundColor: barColors,
      borderWidth: 6,
    },
  ],
};

 const options= {
    rotation: 45,
    
    plugins: {
      
      labels:{
        render: (ctx)=>{
          return ctx.value + " mb ";
        },
        position:"outside",
        fontColor: barColors
      },
      datalabels:{
        formatter: (value, ctx) => {
          let sum = 0;
          let dataArr = ctx.chart.data.datasets[0].data;
          dataArr.map(data => {
            sum += data;
          });
          let percentage = (value*100 / sum).toFixed(0)+"%";
          return percentage;
        },
        labels: {
          title: {
          },
        },
        color: "#FFFFFF"
      },
      legend: {
        display: true,
        font: {
          size: 18
        },
        position: 'left',
        align: 'end',
        labels: {
            usePointStyle	: true,
            pointStyle: "circle",
            fontColor: '#444B48',
            boxWidth: 11,
            boxHeight: 10,
            borderRadius: "50",
            font:{
              size: 12
            }
        }
      },
      tooltip: {
        usePointStyle: true,
        cornerRadius: 0,
        boxPadding: 9,
        boxHeight: 6,
        callbacks: {
            labelPointStyle: function(context) {
                return {
                    pointStyle: 'circle',
                    rotation: 0
                };
            }
        }
      },
      title: {
        display: false,
        beginAtZero: true,
      },
      type: 'linear'
    },
    responsive: true,
    aspectRatio: 2
  }

  return <Pie options={options} plugins={[ChartDataLabels]} data={data} />;
}