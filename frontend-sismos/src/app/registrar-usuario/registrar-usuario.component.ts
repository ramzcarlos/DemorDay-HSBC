import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';




@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit{

  usuario : Usuario = new Usuario();

  constructor(private usuarioServicio: UsuarioService, private router: Router ){}

  ngOnInit(): void {
      console.log(this.usuario);
  }

  guardarUsuario(){
    this.usuarioServicio.registrarUsuario(this.usuario).subscribe(dato =>{
      console.log(dato);
      this.irALaListaDeUsuarios();
    }, error => console.log(error));
    //);
  }

  irALaListaDeUsuarios(){
    this.router.navigate(['/usuarios']);
  }

  onSubmit(){
    console.log(this.usuario);
    this.guardarUsuario();
  }

}
