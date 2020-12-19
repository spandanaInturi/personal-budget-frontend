import { Component, OnInit } from '@angular/core';
import { UserdetailsService } from '../userdetails.service'
import { Router } from '@angular/router'

@Component({
  selector: 'pb-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(public _userservice:UserdetailsService ) { }

}
