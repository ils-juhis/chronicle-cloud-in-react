import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { schoolData } from '../../../data/graphData';

ChartJS.register(ArcElement, Tooltip, Legend);

//pie chart
let pieXValues = ["Multimedia", "Audio Notes", "Notes","Free Space"];
let {multimedia, audioNotes, notes, free} = schoolData[0];
let pieYValues = [multimedia, audioNotes, notes, free];
let barColors = ["#286BCB", "#7DB0F7", "#CCCCCC", "#386CB5"];

export const data = {
  labels: pieXValues,
  datasets: [
    {
      data: pieYValues,
      backgroundColor: barColors,
      borderWidth: 6,
    },
  ],
};

export const options= {
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

export function PieChart() {
  return <Pie options={options} data={data} />;
}