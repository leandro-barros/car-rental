import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentSearchComponent } from './rent-search/rent-search.component';
import { RentRoutingModule } from './rent-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material';

@NgModule({
  declarations: [RentSearchComponent],
  imports: [
    CommonModule,
    RentRoutingModule,

    FormsModule,
    ReactiveFormsModule,
    RentRoutingModule,

    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatListModule
  ]
})
export class RentModule { }
