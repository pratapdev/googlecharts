import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
declare var google: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('pieChart') pieChart: ElementRef
  @ViewChild('barChart') barChart: ElementRef;

  isPie:boolean;
  isBar:boolean;
  isArea:boolean;
  isGauge:boolean;


  drawPieChart = () => {
    this.isPie = false;
    this.isArea = true;
    this.isBar = true;
    this.isGauge = true;
    

  const data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Work', 11],
    ['Eat', 2],
    ['Commute', 2],
    ['Watch TV', 2],
    ['Sleep', 7]
  ]);

  const options = {
    title: 'My Daily Activities',
    // legend: {position: 'top'}
  };

  const chart = new google.visualization.PieChart(document.getElementById('pieChart'));
  chart.doubleTapToZoomEnabled = false;

  chart.draw(data, options);
}

drawBarChart = () => {

  this.isPie = true;
    this.isArea = true;
    this.isBar = false;
    this.isGauge = true;

  const data = google.visualization.arrayToDataTable([
    ['City', '2010 Population', '2000 Population'],
    ['New York City, NY', 8175000, 8008000],
    ['Los Angeles, CA', 3792000, 3694000],
    ['Chicago, IL', 2695000, 2896000],
    ['Houston, TX', 2099000, 1953000],
    ['Philadelphia, PA', 1526000, 1517000]
  ]);

  const options = {
    title: 'Population of Largest U.S. Cities',
    chartArea: { width: '50%' },
    explorer:{
      actions:['rightClickToReset']
    },
    hAxis: {
        title: 'Total Population',
        minValue: 0,
        textStyle: {
            bold: true,
            fontSize: 12,
            color: '#4d4d4d'
        },
        titleTextStyle: {
            bold: true,
            fontSize: 18,
            color: '#4d4d4d'
        }
    },
    vAxis: {
        title: 'City',
        textStyle: {
            fontSize: 14,
            bold: true,
            color: '#848484'
        },
        titleTextStyle: {
            fontSize: 14,
            bold: true,
            color: '#848484'
        }
    }
}

  const chart = new google.visualization.BarChart(document.getElementById('barChart'));
  chart.doubleTapToZoomEnabled = false;

  chart.draw(data, options);
}

  ngAfterViewInit() {
    google.charts.load('current', { 'packages': ['corechart'] });
    this.drawChart(this.drawPieChart);
    //this.drawChart(this.drawBarChart);
    
  }

  drawChart(chartType){
    google.charts.setOnLoadCallback(this[chartType]);
    
  }
}
