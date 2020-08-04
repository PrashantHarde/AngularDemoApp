import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  chart = [];
  chart2 = [];
  constructor() { }

  ngOnInit(): void {
    this.chart = new Chart('bar',
      {
        type: 'bar',
        options: {
          responsive: true,
          title: {
            display: true,
            text: 'Bar Chart'
          },
        },
        data: {
          labels: ["M", "T", "W", "T", "F", "S", "S"],
          datasets: [
            {
              type: 'bar',
              label: 'Apples',
              data: [40, 60, 100, 20, 80],
              backgroundColor: "rgba(255,0,255,0.4)",
              borderColor: 'rgba(255,0,255,0.4)',
              fill: false
            },
            {
              type: 'bar',
              label: 'Oranges',
              data: [30, 60, 50, 100, 40],
              backgroundColor: "rgba(0,0,255,0.4)",
              borderColor: "rgba(0,0,255,0.4)",
              fill: false
            }
          ]
        }
      }) 

      new Chart('pie', {
        type: 'pie',
        options: {
          responsive: true,
          title: {
            display: true,
            text: 'Pie Chart'
          },
          legend: {
            position: 'top',
          },
          animation: {
            animateScale: true,
            animateRotate: true
          },
          data: {
            datasets: [{
              data: [45,10,5,25,15].reverse(),
              backgroundColor: ["red","orange","green","yellow","blue"]
            }]
          }
        }
      })
  }
}
