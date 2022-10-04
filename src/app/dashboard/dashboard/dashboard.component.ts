import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // Doughnut
public doughnutChartLabels: string[] = [  ];
public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
    { data: [ 350, 450, 100 ], label: 'Series A' }
  ];

public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
  responsive: false
};

 // Doughnut
 public doughnutChartLabels1: string[] = [  ];
 public doughnutChartDatasets1: ChartConfiguration<'doughnut'>['data']['datasets'] = [
     { data: [ 350, 450, 100, 200 ], label: 'Series A' }
   ];
 
 public doughnutChartOptions1: ChartConfiguration<'doughnut'>['options'] = {
   responsive: false
 };
 // bar
 public barChartLegend = true;
 public barChartPlugins = [];
public chartColors:Array<any> =  [
  {
    backgroundColor: ['#d13537', '#b000b5'] 
  }];

 public barChartData: ChartConfiguration<'bar'>['data'] = {
   labels: [ 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
   datasets: [
     { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series ' }
   ],
 };

 public barChartOptions: ChartConfiguration<'bar'>['options'] = {
   responsive: false,
 };
constructor() {
}
ngOnInit(): void {
  
}

}
