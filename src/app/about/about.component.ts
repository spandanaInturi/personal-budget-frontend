import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'pb-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  public addexpenses(){
    this._router.navigate(['/dashboard'])

  }

}
