import {Component, OnInit} from '@angular/core';
import {MainService} from './services/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public chartB = {
    options: {
      responsive: true,
      // We use these empty structures as placeholders for dynamic theming.
      scales: { xAxes: [{}], yAxes: [{}] },
      plugins: {
        datalabels: {
          anchor: 'end',
          align: 'end',
        }
      }
    },
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    type: 'bar',
    legend: true
  };
  public barChartData: Chart.ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  constructor(private _mainService: MainService) {
  }

  public ngOnInit(): void {
    this._mainService.getPlatData();
  }
}
