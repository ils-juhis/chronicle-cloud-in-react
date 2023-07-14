import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { schoolData } from '../../../data/graphData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
    plugins: {
      datalabels:{
        display: false
      },
      legend: {
        display: false,
        // position: 'right',
        // align: 'start',
        // labels: {
        //     usePointStyle	: true,
        //     pointStyle: "circle",
        //     fontColor: '#444B48',
        //     boxWidth: 6,
        //     boxHeight: 6,
        //     borderRadius: "50",
        // },    
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
      },
    },

    tooltips: {
      mode: 'label'
    },
    
    scales: {
      x:  {
        stacked:true,
        grid: {
          display: false
        },
        ticks:{
          fontColor: "#C7C7C7",
          font:{
            size:11
          },
        }
      },
  
      y: {
        stacked:true,
        grid:{
          drawBorder: false
        },
        min: 0,
        max: 400,
        ticks: {
          // forces step size to be 50 units
          stepSize: 100
        }
      },
    },
    responsive: true,
    aspectRatio: 2
  }

let xValues = schoolData.map((value)=>{return value.schoolName})


export const data = {
  labels: xValues,

    datasets: [{
      label: "Active",
      backgroundColor: "#F9AC32",
      data: schoolData.map((value)=>{return value.roster.active}),
      barThickness:20,
      hoverBackgroundColor: "#5BCDA2"
    },{
        label:"Inactive",
        backgroundColor: "#EEEEEE",
        data: schoolData.map((value)=>{return value.roster.inactive}),
        barThickness:20
    }]
};

export function StackedBarGraph() {

  return <Bar options={options} data={data} />;
}