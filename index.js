// Import stylesheets
import './style.css';
import Chart from 'chart.js';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var ctx = document.getElementById('myChart');
var data_1 = [
  { x: 'Pass', net: 100, cogs: 50, gm: 50 },
  { x: 'Fail', net: 120, cogs: 55, gm: 75 },
];
var data = {
  labels: ['Pass', 'Fail', 'Over All'],
  datasets: [
    {
      label: 'OUP - JOURNAL',
      data: [50, 25, 75],

      backgroundColor: [
        'rgb(255, 99, 132)',
        // 'rgb(54, 162, 235)',
        // 'rgb(255, 205, 86)'
      ],
      hoverOffset: 4,
    },
    {
      label: 'LWW - JOURNAL',
      data: [30, 15, 45],
      backgroundColor: [
        // 'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        // 'rgb(255, 205, 86)'
      ],
      // ,
      // parsing: {
      //   yAxisKey: 'cogs',
      // },
    },
    {
      label: 'TNF - BOOKS',
      data: [10, 5, 25],

      backgroundColor: [
        // 'rgb(255, 99, 132)',
        // 'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
      ],
      // ,
      // parsing: {
      //   yAxisKey: 'gm',
      // },
    },
  ],
};
var data1 = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
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
  ],
};
var options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};
new Chart(ctx, { type: 'bar', data, options });
