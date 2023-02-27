import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
//import  swal  from 'sweetalert2';
@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.css']
})
export class ActualizarUsuarioComponent {

  id:number;
  usuario : Usuario = new Usuario();
  constructor(private usuarioService:UsuarioService, private router:Router, private route:ActivatedRoute){

  }


  ngOnInit(): void {
  this.id = this.route.snapshot.params['id'];
  this.usuarioService.obtenerUsuarioPorId(this.id).subscribe(dato =>{
    this.usuario=dato;
  }, error=> console.log(error));
  }

  irAlaListadeUsuarios(){
    this.router.navigate(['/usuarios']);
   //swal.fire('Usuario actualizado',`El usuario ${this.usuario.nombre} ha sido actualizado con exito`,`success`);
  }


  onSubmit(){
    this.usuarioService.actualizarUsuario(this.id,this.usuario).subscribe(dato => {
      this.irAlaListadeUsuarios();
    },error => console.log(error));
  }

}
