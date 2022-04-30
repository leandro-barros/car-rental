import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule, MatRadioModule } from '@angular/material';

import { ConfirmacaoExclusaoComponent } from './confirmacao-exclusao/confirmacao-exclusao.component';

@NgModule({
  declarations: [
    ConfirmacaoExclusaoComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,

    MatRadioModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    MatCheckboxModule,
    MatFormFieldModule
  ],
  exports: [
    ConfirmacaoExclusaoComponent
  ]
})
export class SharedModule { }
