import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarRegisterComponent } from './car-register/car-register.component';
import { CarSearchComponent } from './car-search/car-search.component';

const routes: Routes = [
  {
    path: '',
    component: CarSearchComponent
  },
  {
    path: 'novo',
    component: CarRegisterComponent
  },
  {
    path: ':codigo',
    component: CarRegisterComponent
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
