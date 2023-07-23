import React, { useEffect, useRef } from 'react';
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);





function customTooltipFunc (context) {
  // Tooltip Element
  let tooltipEl = document.getElementById('chartjs-tooltip');

  // Create element on first render
  if (!tooltipEl) {
      tooltipEl = document.createElement('div');
      tooltipEl.id = 'chartjs-tooltip';
      tooltipEl.innerHTML = '<table></table>';
      document.body.appendChild(tooltipEl);
  }

  // Hide if no tooltip
  const tooltipModel = context.tooltip;
  if (tooltipModel.opacity === 0) {
      tooltipEl.style.opacity = 0;
      return;
  }

  // Set caret Position
  tooltipEl.classList.remove('above', 'below', 'no-transform');
  if (tooltipModel.yAlign) {
      tooltipEl.classList.add(tooltipModel.yAlign);
  } else {
      tooltipEl.classList.add('no-transform');
  }

  // Set Text
  if (tooltipModel.dataPoints) {
      const dataPoints = tooltipModel.dataPoints;

      let innerHtml= ``;
      // let innerHtml = '<thead>';

      // titleLines.forEach(function(title) {
      //     innerHtml += '<tr><th>' + title + '</th></tr>';
      // });
      // innerHtml += '</thead><tbody>';

      dataPoints.forEach(function(dataPoint, i) {
          const color = dataPoint.dataset.hoverBackgroundColor;
          let span = '<span>' + dataPoint.dataset.label + '</span> <span style="display: inline-block; width: 5px; height: 5px; background-color: '+ color +'; border-radius: 50%"></span>';
          span += '<br> <b>' + dataPoint.raw +'</b>'
          innerHtml += '<tr style="font-size: 12px; text-align: right;"><td>' + span + '</td></tr>';
      });
      innerHtml += '</tbody>';

      let tableRoot = tooltipEl.querySelector('table');
      tableRoot.innerHTML = innerHtml;
  }

  const position = context.chart.canvas.getBoundingClientRect();

  // Display, position, and set styles for font
  tooltipEl.style.opacity = 1;
  tooltipEl.style.position = 'absolute';
  tooltipEl.style.left = position.left + window.pageXOffset + (tooltipModel.caretX - 70) + 'px';
  tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
  tooltipEl.style.padding = tooltipModel.padding + 'px ' + tooltipModel.padding + 'px';
  tooltipEl.style.pointerEvents = 'none';
  tooltipEl.style.zIndex = '999';
}


//custom legands

const getOrCreateLegendList = (chart, id) => {
  const legendContainer = document.getElementById(id);
  let listContainer = legendContainer.querySelector('ul');

  if (!listContainer) {
    listContainer = document.createElement('ul');
    listContainer.style.display = 'flex';
    listContainer.style.flexDirection = 'column';
    listContainer.style.margin = 0;
    listContainer.style.padding = 0;

    legendContainer.appendChild(listContainer);
  }

  return listContainer;
};

const htmlLegendPlugin = {
  id: 'htmlLegend',
  afterUpdate(chart, args, options) {
    const ul = getOrCreateLegendList(chart, "bar-legend-container");

    // Remove old legend items
    while (ul.firstChild) {
      ul.firstChild.remove();
    }

    // Reuse the built-in legendItems generator
    const items = chart.options.plugins.legend.labels.generateLabels(chart);

    items.forEach(item => {
      const li = document.createElement('li');
      li.style.alignItems = 'center';
      li.style.cursor = 'pointer';
      li.style.display = 'flex';
      li.style.flexDirection = 'row';
      li.style.marginLeft = '10px';

      li.onclick = () => {
        const {type} = chart.config;
        if (type === 'pie' || type === 'doughnut') {
          // Pie and doughnut charts only have a single dataset and visibility is per item
          chart.toggleDataVisibility(item.index);
        } else {
          chart.setDatasetVisibility(item.datasetIndex, !chart.isDatasetVisible(item.datasetIndex));
        }
        chart.update();
      };

      // Color box
      const boxSpan = document.createElement('span');
      boxSpan.style.background = item.fillStyle;
      boxSpan.style.borderColor = item.strokeStyle;
      boxSpan.style.borderRadius = "50%";
      boxSpan.style.borderWidth = item.lineWidth + 'px';
      boxSpan.style.display = 'inline-block';
      boxSpan.style.height = '10px';
      boxSpan.style.marginRight = '10px';
      boxSpan.style.width = '10px';
      

      // Text
      const textContainer = document.createElement('p');
      textContainer.style.color = item.fontColor;
      textContainer.style.margin = 0;
      textContainer.style.padding = 0;
      textContainer.style.fontSize = '11px';
      textContainer.style.textDecoration = item.hidden ? 'line-through' : '';

      const text = document.createTextNode(item.text);
      textContainer.appendChild(text);

      li.appendChild(boxSpan);
      li.appendChild(textContainer);
      ul.appendChild(li);
    });
  }
};








export default function StackedBarGraph({schoolData, category}) {
  const chartRef = useRef(null);
  const options = {
    responsive: true,
    aspectRatio: 2,
    interaction: {
      mode: 'x'
  },
    plugins: {
      datalabels:{
        display: false
      },
      legend: {
        display: false,
      },

      tooltip: {
        // backgroundColor: "rgba(243, 244, 249, 0)",
        // usePointStyle: true,
        // cornerRadius: 0,
        // bodyColor: "#000",
        // boxPadding: 9,
        // boxHeight: 6,
        
        // callbacks: {
        //   title: function() {
        //     return ""
        //   },
        //   labelPointStyle: function(context) {
        //       return {
        //           pointStyle: 'circle',
        //           rotation: 0
        //       };
        //   },
        //   labelColor: function(context){
        //     console.log(context.dataset.hoverBackgroundColor)
        //     return {
        //       backgroundColor: context.dataset.hoverBackgroundColor
        //     };
        //   }
        // }
        enabled: false,

        external: customTooltipFunc
      },
      title: {
        display: false,
      },
    },
    
    scales: {
      x:  {
        stacked:true,
        grid: {
          display: false,
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
          drawBorder: false,
        },
        min: 0,
        max: 400,
        ticks: {
          // forces step size to be 50 units
          stepSize: 100
        }
      },
    },
  }

let xValues = schoolData.map((value)=>{return value.schoolName})

 const data = {
  labels: xValues,

    datasets: [{
      label: "Active",
      backgroundColor: "#F9AC32",
      data: schoolData.map((value)=>{return value[category].active}),
      barThickness:20,
      hoverBackgroundColor: "#5BCDA2"
    },{
        label:"Inactive",
        backgroundColor: "#EEEEEE",
        data: schoolData.map((value)=>{return value[category].inactive}),
        barThickness:20,
        hoverBackgroundColor:"#EEEEEE"
    }]
};

  useEffect(()=>{  
    // console.log(chartRef)
  })


  return <Bar ref={chartRef} plugins={[htmlLegendPlugin]} options={options} data={data} />;
}