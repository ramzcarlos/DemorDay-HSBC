import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario';
import { Router } from '@angular/router';
import  swal  from 'sweetalert2';
@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit{

  

usuarios:Usuario[];
constructor(private usuarioServicio:UsuarioService,private router:Router) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  actualizarUsuario(id:number){
    this.router.navigate(['actualizar-usuario',id]);
  }

  private obtenerUsuarios(){
    this.usuarioServicio.obtenerListaDeUsuarios().subscribe(dato => {
      this.usuarios = dato;
    });
  }

  eliminarUsuario(id:number){
   
      
        this.usuarioServicio.eliminarUsuario(id).subscribe(dato => {
          console.log(dato);
          this.obtenerUsuarios();
          
        })
      
    
  }  

}
