import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RentSearchComponent } from './rent-search/rent-search.component';

const routes: Routes = [
  {
    path: '',
    component: RentSearchComponent
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
export class RentRoutingModule { }
