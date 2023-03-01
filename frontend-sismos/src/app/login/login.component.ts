import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Credentials } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  creds: Credentials ={
    email: '',
    pass: ''
  };
  constructor( private usuarioService: UsuarioService, private router:Router){
   
  }

  login(form: NgForm){
    console.log('form value', form.value);
    this.usuarioService.login(this.creds)
    .subscribe(Response =>{
      this.router.navigate(['/']);
    })
  }

}
