import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Sismo} from '../sismo';
import { SismoService } from '../sismo.service';
@Component({
  selector: 'app-lista-sismos',
  templateUrl: './lista-sismos.component.html',
  styleUrls: ['./lista-sismos.component.css']
})
export class ListaSismosComponent implements OnInit {

  
  sismos:Sismo[];
constructor(private sismoServicio:SismoService,private router:Router) { }

  ngOnInit(): void {
    this.obtenerSismos();
  }

  actualizarSismo(id:number){
    this.router.navigate(['actualizar-sismo',id]);
  }

  private obtenerSismos(){
    this.sismoServicio.obtenerListaDeSismos().subscribe(dato => {
      this.sismos = dato;
    });
  }

  eliminarSismo(id:number){
   
      
        this.sismoServicio.eliminarSismo(id).subscribe(dato => {
          console.log(dato);
          this.obtenerSismos();
          
        })
      
    
  } 
}
