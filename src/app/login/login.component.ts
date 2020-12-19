import { Component, OnInit } from '@angular/core';
import { UserdetailsService } from '../userdetails.service'
import { Router } from '@angular/router'

@Component({
  selector: 'pb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email:String=""
  public password:String=""

  constructor(private userservice:UserdetailsService,private _router:Router) { }

  ngOnInit(): void {
  }

  public loginUser() {
    console.log("hello entered");
      let user_obj:any={};
      user_obj.email=this.email;
      user_obj.password = this.password;
      console.log(user_obj)
      this.userservice.get_userdetails(user_obj).subscribe((response:any)=>{
        localStorage.setItem('token', response.token)
        const valid_token = JSON.parse(atob(response.token.toString().split('.')[1]));
        console.log(valid_token.expiresIn*29*1000)
        setTimeout(function(){
         this.userservice.logout(true)}.bind(this),(valid_token.expiresIn*29*1000));
        this._router.navigate(['/dashboard'])
      },err=> alert("Invalid Login details"));

    }

}

