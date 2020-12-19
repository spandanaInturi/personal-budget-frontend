import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';


@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  /*public dataSource = {
    datasets : [ {
        data: [],
        backgroundColor: [
                   '#F1C40F',
                   '#FF5733',
                   '#F08080',
                   '#5DADE2',
                   '#196F3D',
                   '#E74C3C',
                   '#FA8072',
    ]
    }],
    labels: []

};*/

constructor(private http: HttpClient, public dataService: DataService) { }

  ngOnInit(): void {


   /* this.dataService.getData().subscribe((data: any) => {
      for (let i = 0; i < data.length; i++) {
        this.dataSource.datasets[0].data[i] = data[i].budget;
        this.dataSource.labels[i] = data[i].title;
        this.createChart();
      }
    });*/

  }

  /*createChart(){
    var ctx : any = document.getElementById('myChart')
    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data : this.dataSource
    });*/


}





