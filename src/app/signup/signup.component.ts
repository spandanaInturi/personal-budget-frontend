import { getParseErrors } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { UserdetailsService } from '../userdetails.service'
import { Router } from '@angular/router'

@Component({
  selector: 'pb-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public email:string="";
  public password:string="";
  public confirm_password:string = "";

  constructor(private userservice:UserdetailsService,
    private _router:Router){ }


  ngOnInit(): void {
  }

  public registerUser() {

    if(this.password!=this.confirm_password){
      alert("Password Doesn't Match ")

    }
    else{
      let user_obj:any={};
      user_obj.email=this.email;
      user_obj.password = this.password;
      this.userservice.post_userdetails(user_obj).subscribe( res => {
        localStorage.setItem('token', res.token)
        localStorage.setItem("email",user_obj.email)
        // const valid_token = JSON.parse(atob(res.token.toString().split('.')[1]));
        // setTimeout(function(){
        //  this.userservice.logout(true)}.bind(this),(valid_token.expiresIn*29*1000));
        const valid_token = JSON.parse(atob(res.token.toString().split('.')[1]));
        console.log(valid_token.expiresIn*29*1000)
        setTimeout(function(){
         this.userservice.logout(true)}.bind(this),(valid_token.expiresIn*29*1000));
        this._router.navigate(['/dashboard'])
      },
      err => alert("User already exist"));
    }

  }

}

