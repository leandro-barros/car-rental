import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../seguranca/auth.guard';
import { CarRegisterComponent } from './car-register/car-register.component';
import { CarSearchComponent } from './car-search/car-search.component';

const routes: Routes = [
  {
    path: '',
    component: CarSearchComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'novo',
    component: CarRegisterComponent,
    canActivate: [AuthGuard]
  },
  {
    path: ':codigo',
    component: CarRegisterComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CarRoutingModule { }
