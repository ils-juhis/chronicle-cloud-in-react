import React, { useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import * as helpers from 'chart.js/helpers';
ChartJS.register(ArcElement, Tooltip, Legend);

//pie chart

export const LabelPluginProvider = ({ children }) => {
  React.useEffect(() => {
      window.Chart = ChartJS;
      ChartJS.helpers = helpers;
      import('chart.js-plugin-labels-dv');
  }, []);
  return children;
};




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
    labels:{
      render: (ctx)=>{
        return ctx.value + " mb ";
      },
      position:"outside",
      fontColor: barColors
    },
    plugins: {
      labels: [
        {
          render: (ctx)=>{
            console.log(ctx.value)
            return ctx.value + " mb ";
          },
          position:"outside",
          fontColor: barColors
        },
        {
          render: 'percentage', 
          fontColor: "#fff"
        }
      ],
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

  return <LabelPluginProvider>
    {console.log(options)}
    <Pie options={options} data={data} />
  </LabelPluginProvider>;
}

