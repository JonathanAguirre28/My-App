import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormularioComponent {
  data: any;

    UsersForm = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [
        Validators.required,
        Validators.pattern(/^-?(0|[1-9]\d*)?$/),
        Validators.maxLength(10),
      ]),
     mail: new FormControl('', [
        Validators.required,
      ]),
    });
    constructor(public dialog: MatDialog,) { }
  
    onSubmit() {
      if (this.UsersForm.valid) {
        this.dialog.open(ModalComponent, {
          data: {
            data: this.UsersForm.value,
          },
        });
      }
    }
  }
