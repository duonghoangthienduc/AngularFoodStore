import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;


  constructor() { }

  ngOnInit(): void {
  }
  //Pỉe chart
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },

    }
  };
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [ [ 'Khách hàng thân thiết' ], [ 'Khách mới' ], 'Khách hàng(%)' ],
    datasets: [ {
      data: [ 30 , 70 ]
    } ]
  };
  public pieChartType: ChartType = 'pie';




  //Dynamic chart
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
        position:'bottom'
      },

    }
  };
  public barChartType: ChartType = 'bar';


  public barChartData: ChartData<'bar'> = {
    labels: [ '2015', '2016', '2017', '2018', '2019', '2020', '2021' ],
    datasets: [
      { data: [ 50, 90, 150, 200, 400, 290, 240 ], label: 'Doanh thu' },
      { data: [ 100, 100, 120, 150, 200, 250, 220 ], label: 'Chi phí' }
    ]
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  dataSet = [
    {
      stt: 1,
      storeName: 'Boucheé',
      phone:  '0123.xxx.xxx',
      address: '300A Nguyễn Tất Thành'
    },
  ]

}


