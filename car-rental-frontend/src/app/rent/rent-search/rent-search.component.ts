import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CarService } from 'src/app/car/car.service';
import { Car } from 'src/app/core/model';

@Component({
  selector: 'app-rent-search',
  templateUrl: './rent-search.component.html',
  styleUrls: ['./rent-search.component.css']
})
export class RentSearchComponent implements OnInit {

  formGroupCarFiltro: FormGroup;

  cars = [];

  constructor(
    private carService: CarService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.configurarForm();
    this.pesquisar();
  }

  configurarForm() {
    this.formGroupCarFiltro = this.formBuilder.group({
      model: ['']
    });
  }

  pesquisar() {
    return this.carService.pesquisar(this.formGroupCarFiltro.value)
      .subscribe((response: Car[]) => {
        this.cars = response;
      });
  }

  rent() {
    this.toastr.warning('Implementação futura');
  }

}
