import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


import { Chart } from 'chart.js'
import { UserdetailsService } from '../userdetails.service';

@Component({
  selector: 'pb-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent implements OnInit {

  chartOptions = {
    responsive: true
  }

  labels = [];

  chartData = [
    {
      label: 'Current Budget',
      data: []
    },
    {
      label: 'Maximum Budget',
      data: []
    }
  ];

  colors = [
    {
      backgroundColor: 'rgb(128, 0, 0)'
    },
    {
      backgroundColor: 'rgba(0, 118, 255, 0.8)'
    }
  ]

  onChartClick(event) {
    console.log(event);
  }

  public loggedInUserName:any;

  constructor(private http: HttpClient,public Userservice: UserdetailsService) { }

  ngOnInit(): void {

    this.loggedInUserName = this.Userservice.login_user;
    console.log("In barchart component",this.loggedInUserName)
    let user_obj:any={};
      user_obj.email=this.loggedInUserName;
    this.Userservice.getBudgetData(user_obj)
    .subscribe((res: any) => {
      console.log("final chart",res);
      for (let i = 0; i < res.length; i++) {

        this.chartData[0].data[i] = res[i].budget;
        this.chartData[1].data[i] = res[i].maxbudget;
        this.labels[i] = res[i].title;

      }
    });
    }}
