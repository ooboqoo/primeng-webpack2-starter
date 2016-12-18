import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'selector',
  template: '<p-chart type="bar" [data]="data"></p-chart>'
})
export class BarDemoComponent implements OnInit {
  data: any;

  constructor() { }

  ngOnInit() {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          type: 'line',
          label: 'My First dataset',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          borderColor: '#1E88E5',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          type: 'bar',
          label: 'My Second dataset',
          backgroundColor: '#9CCC65',
          borderColor: '#7CB342',
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    };
  }
}