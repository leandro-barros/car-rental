import { Title } from '@angular/platform-browser';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

import { MatDialog } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { ToastrService } from 'ngx-toastr';

import { Car } from '../../core/model';
import { CarService } from '../car.service';
import { ConfirmacaoExclusaoComponent } from 'src/app/shared/confirmacao-exclusao/confirmacao-exclusao.component';

@Component({
  selector: 'app-car-search',
  templateUrl: './car-search.component.html',
  styleUrls: ['./car-search.component.css']
})
export class CarSearchComponent implements OnInit {

  displayedColumns: string[] = ['id', 'modelo', 'marca', 'cor', 'portas', 'plaque', 'airconditioning', 'actions'];

  cars = new MatTableDataSource<Car>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  formGroupCarFiltro: FormGroup;

  constructor(
    private title: Title,
    public dialog: MatDialog,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private carService: CarService,
  ) { }

  ngOnInit() {
    this.configurarForm();
    this.cars.paginator = this.paginator;
    this.pesquisar();
    this.title.setTitle('Listagem de carros');
  }

  configurarForm() {
    this.formGroupCarFiltro = this.formBuilder.group({
      tipo: ['null'],
      nome: [null]
    });
  }

  pesquisar() {
    return this.carService.pesquisar(this.formGroupCarFiltro.value)
      .subscribe((response: Car[]) => {
        this.cars.data = response;
      });
  }

  confirmarExclusao(car: Car): void {
    const dialogRef = this.dialog.open(ConfirmacaoExclusaoComponent, {
      data: `Deseja realmente excluir o car ${car.model}`,
      width: '350px'
    });

    dialogRef.afterClosed().subscribe(response => {
      if (response) {
        this.excluir(car);
      }
    });
  }

  excluir(car: Car) {
    this.carService.excluir(car.id)
      .subscribe(() => {
        this.pesquisar();
        this.toastr.success('Carro excluído com sucesso !');
      });
  }

}
