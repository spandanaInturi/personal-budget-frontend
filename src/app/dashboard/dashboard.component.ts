import { Component, OnInit } from '@angular/core';
import { UserdetailsService } from '../userdetails.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'pb-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  public specialEvents = [];

   budget:number;
   maxbudget:number;
   title:string

  constructor(private userservice:UserdetailsService,private _router:Router) { }

  randomColorGen(){
    let randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    console.log(randomColor)
    return randomColor;
  }

  public invalid_details(){
    console.log("invalid details");
  }


  public addbudget(){
    let budget_details = {
    'username': this.userservice.login_user,
    'budget': this.budget,
    'maxbudget':this.maxbudget,
    'title': this.title.charAt(0).toUpperCase()+this.title.slice(1),
    'color':this.randomColorGen(),
    }

    if(!this.budget || !this.maxbudget || !this.title){
      this.invalid_details();
      return;
    }

    else{
      this.userservice.add_budget(budget_details).subscribe((data:any)=>{
        //this._router.navigate(['/barchart'])
        this._router.navigate(['/about'])
      });


    }



  }

  ngOnInit(){
    let user_obj:any={};
    user_obj.user=this.userservice.login_user;
    console.log("user mail bject",user_obj)

    this.userservice.dashboard(user_obj).subscribe(
      res=>
      {
        if (res){
          this.specialEvents=res,
          console.log(res)
        }
      },
      err => {
        if (err instanceof HttpErrorResponse){
          if (err.status == 401){
            this._router.navigate['/login']
          }
        }

      }
  )

  }

}
