import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormDataService {
  private _options:string[] = [
    "Contenidos",
    "Publicidad",
    "Sugerencias",
    "Suscripciones digitales",
  ];

  private _form: FormGroup;

  constructor() {
    this._form = new FormBuilder().group({
      nombre: ['',Validators.maxLength(50), Validators.required],
      email: ['', Validators.email, Validators.required],
      phone: ['', Validators.required],
      a: ['', Validators.required],
      message: ['', Validators.maxLength(200), Validators.required],
    });
  }

  get formB(): FormGroup {
    return this._form;
  }
  get options(): string[] {
    return this._options;
  }
}
