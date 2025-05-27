import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  imports: [ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: [''],
      passwords: this.fb.group({
        password: [''],
        confirmPassword: ['']
      })
    });
  }

  submit() {
    if (this.form.valid) {
      alert('Formulário válido');
    } else {
      alert('Formulário inválido');
    }
  }
}
