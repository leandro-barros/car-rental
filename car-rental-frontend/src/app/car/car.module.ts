import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxMaskModule } from 'ngx-mask';

import { SharedModule } from '../shared/shared.module';

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
import { MatRadioModule, MatDialogModule } from '@angular/material';

import { CarRoutingModule } from './car-routing.module';
import { CarSearchComponent } from './car-search/car-search.component';
import { CarRegisterComponent } from './car-register/car-register.component';
import { ConfirmacaoExclusaoComponent } from '../shared/confirmacao-exclusao/confirmacao-exclusao.component';

@NgModule({
  declarations: [
    CarSearchComponent,
    CarRegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CarRoutingModule,

    SharedModule,

    NgxMaskModule,

    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatRadioModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatFormFieldModule
  ],
  entryComponents: [
    ConfirmacaoExclusaoComponent
  ],
})
export class CarModule { }
