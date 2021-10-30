import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormDataService } from './service/form-data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {
  

  constructor(private formData:FormDataService) { 
  }

  formG(): FormGroup {
    return this.formData.formB;
  }

  ngOnInit(): void {
  }
}
