import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';

import { Chart } from 'chart.js'
import { UserdetailsService } from '../userdetails.service';

@Component({
  selector: 'pb-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {

  constructor(public Userservice: UserdetailsService) { }

  public dataSource = {
    datasets: [{
        label:"Maximum Budget",
        data: [],
        backgroundColor : [
        ]
    }],

    labels: [

    ],
    color : [
      {
        backgroundColor: 'rgb(128, 0, 0)'
      }]
  }

  public options = {
    responsive: true,
    title: {
      display: true,
      position: "top",
      text: "Maximum Budget Distirbution",
      fontSize: 18,
      fontColor: "#111"
    },
    legend: {
      display: true,
      position: "top",
      labels: {
        fontColor: "#333",
        fontSize: 16
      }
    }
  };

  public loggedInUserName:any;


  ngOnInit(): void {
    this.loggedInUserName = this.Userservice.login_user;
    let user_obj:any={};
    user_obj.email=this.loggedInUserName;
    this.Userservice.getBudgetData(user_obj)
  .subscribe((res: any) => {
    console.log(res);
    for (let i = 0; i < res.length; i++) {
     this.dataSource.datasets[0].data[i] = res[i].maxbudget;
     this.dataSource.labels[i] = res[i].title;
     this.dataSource.datasets[0].backgroundColor[i] = res[i].color;
     this.createChart();
    }
  });
  }

  createChart(){
    var ctx : any = document.getElementById("Budget_Chart")
    var myPieChart = new Chart(ctx,{
        type: 'pie',
        data : this.dataSource
    })
}

}
