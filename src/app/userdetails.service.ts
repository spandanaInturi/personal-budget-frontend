import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {
  public register_url:string= "https://budgetspandanabackend.herokuapp.com/signup";
  public login_url:string= "https://budgetspandanabackend.herokuapp.com/login";
  public dashboard_url:string= "https://budgetspandanabackend.herokuapp.com/dashboard";
  public budget_url:string= "https://budgetspandanabackend.herokuapp.com/budget_details";
  public get_budget_url:string= "https://budgetspandanabackend.herokuapp.com/get_budget_details";
  public login_user: any;

  constructor(private httpobject:HttpClient,private _router:Router) { }

  public get_userdetails(user:any):Observable<any>{
    this.login_user = user.email;
    return this.httpobject.post(this.login_url,user)
  }

  public post_userdetails(user:any):Observable<any>{
    console.log("entered signmup");
    this.login_user = user.email;
    return this.httpobject.post(this.register_url,user)
  }

  public dashboard(user:any):Observable<any>{
    console.log("userservice email",user)
    return this.httpobject.post(this.dashboard_url,user)
  }

  public add_budget(user:any):Observable<any>{
    return this.httpobject.post(this.budget_url,user)
  }

  public getBudgetData(user:any):Observable<any>{
    console.log("get thebudget details",user);
    return this.httpobject.post(this.get_budget_url,user)
  }
  public loggedIn()
  {
    return !!localStorage.getItem('token')
  }

  public getToken() {
    return localStorage.getItem('token')
  }

  public logout() {
    localStorage.removeItem('token')
    this._router.navigate([''])
  }

}


