import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-confirmacao-exclusao',
  templateUrl: 'confirmacao-exclusao.component.html',
})
export class ConfirmacaoExclusaoComponent implements OnInit {

  mensagem = null;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ConfirmacaoExclusaoComponent>
  ) {
  }

  ngOnInit() {
    this.mensagem = document.getElementById('p').innerHTML = this.data + '?';
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
