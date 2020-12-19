import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserdetailsService } from './userdetails.service';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userservice:UserdetailsService,
    private _router:Router){ }
  canActivate():boolean{

    if (this.userservice.loggedIn()){
      return true
    }
    else{
      this._router.navigate(['/login'])
      return false
    }

  }



}
