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
      console.log("not valid password")

    }
    else{
      let user_obj:any={};
      user_obj.email=this.email;
      user_obj.password = this.password;
      this.userservice.post_userdetails(user_obj).subscribe( res => {
        localStorage.setItem('token', res.token)
        this._router.navigate(['/dashboard'])
      },
      err => console.log(err));
    }

  }

}

