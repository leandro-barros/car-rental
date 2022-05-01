import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { CarService } from '../car.service';

@Component({
  selector: 'app-car-register',
  templateUrl: './car-register.component.html',
  styleUrls: ['./car-register.component.css']
})
export class CarRegisterComponent implements OnInit {
  formGroupCarro: FormGroup;

  constructor(
    private title: Title,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private carService: CarService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.configurarForm();
    this.title.setTitle('Novo Carro');

    const codigoCar = this.route.snapshot.params['codigo'];

    if (codigoCar) {
      this.buscarCarPorCodigo(codigoCar);
    }
  }

  configurarForm() {
    this.formGroupCarro = this.formBuilder.group({
      id: [],
      model: [null, [Validators.required]],
      mark: [null, [Validators.required]],
      color: [null, [Validators.required]],
      numberPort: [null, [Validators.required,]],
      plaque: [null, [Validators.required]],
      airconditioning: ['true']
    });
  }

  get editando() {
    return Boolean(this.formGroupCarro.get('id').value);
  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edição do Carro: ${this.formGroupCarro.get('model').value}`);
  }

  salvar() {
    
    if (this.formGroupCarro.valid) {
      if (this.editando) {
        this.atualizarCarro();
      } else {
        this.salvarCarro();
      }
    }
  }

  salvarCarro() {
    return this.carService.salvar(this.formGroupCarro.value)
      .subscribe(carro => {
        this.toastr.success('Carro adicionado com sucesso!');
        this.router.navigate(['/carros']);
      });
  }

  atualizarCarro() {
    this.carService.atualizar(this.formGroupCarro.value)
      .subscribe(carro => {
        this.router.navigate(['/carros']);
        this.toastr.success('Carro alterado com sucesso !');
        this.atualizarTituloEdicao();
      });
  }

  buscarCarPorCodigo(codigo: number) {
    this.carService.buscarCarPorCodigo(codigo)
      .subscribe(car => {
        this.formGroupCarro.patchValue(car);
        const airconditioning = (car.airconditioning === true ? 'true' : 'false');
        this.formGroupCarro.controls.airconditioning.setValue(airconditioning);
        this.atualizarTituloEdicao();
      });
  }

  novo() {
    this.formGroupCarro.reset();
    this.router.navigate(['/carros/novo']);
  }

}
