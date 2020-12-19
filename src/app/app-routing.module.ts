import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { P404Component } from './p404/p404.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './auth.guard';
import {BarchartComponent} from './barchart/barchart.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { PieComponent } from './pie/pie.component';
import { LineComponent } from './line/line.component';



const routes: Routes = [

  {
    path: '',
    component: HomepageComponent,
    pathMatch: 'full'
  },

  {
    path: 'about',
    component: AboutComponent,

  },

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'contact',
    component: ContactComponent,

  },
  {
    path: 'signup',
    component: SignupComponent
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'barchart',
    component: BarchartComponent,

  },
  {
    path: 'lineplot',
    component: LineComponent,

  },

{
  path: 'pie',
  component: PieComponent,
},

  {
    path: '**',
    component: P404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
