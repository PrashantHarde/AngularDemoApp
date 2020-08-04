import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  chart = [];
  chart2 = [];
  collapsed = true;

  constructor( private router: Router) { }

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
          labels: ["Maths", "Physics", "Chemistry", "Social Science", "English"],
          datasets: [
            {
              type: 'bar',
              label: 'User 1',
              data: [40, 60, 100, 20, 80, 0],
              backgroundColor: "rgba(255,0,255,0.4)",
              borderColor: 'rgba(255,0,255,0.4)',
              fill: false
            },
            {
              type: 'bar',
              label: 'User 2',
              data: [60, 80, 40, 60, 20],
              backgroundColor: "rgba(0,0,255,0.4)",
              borderColor: "rgba(0,0,255,0.4)",
              fill: false
            }
          ]
        }
      }
    )
    this.chart2 = new Chart('pie', {
      type: 'pie',
      data: {
        labels: ["Total Users", "Active Users"],
        datasets: [
          {
            label: "Users",
            backgroundColor: ["#3e95cd", "#8e5ea2"],
            data: [1000,850]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Pie Chart'
        }
      }
    });
  }

  onLogout() {
    this.router.navigate(['/login']);
  }
}
