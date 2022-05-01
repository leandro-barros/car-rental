import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentSearchComponent } from './rent-search/rent-search.component';
import { RentRoutingModule } from './rent-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule, MatDialogModule, MatListModule } from '@angular/material';

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
    MatTableModule,
    MatRadioModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDialogModule,
    MatDividerModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatListModule
    
  ]
})
export class RentModule { }
