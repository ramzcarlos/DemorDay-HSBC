import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sismo } from '../sismo';
import { SismoService } from '../sismo.service';
@Component({
  selector: 'app-registrar-sismos',
  templateUrl: './registrar-sismos.component.html',
  styleUrls: ['./registrar-sismos.component.css']
})
export class RegistrarSismosComponent implements OnInit {

  sismo : Sismo = new Sismo();

  constructor(private sismoServicio: SismoService, private router: Router ){}

  ngOnInit(): void {
      console.log(this.sismo);
  }

  guardarSismo(){
    this.sismoServicio.registrarSismo(this.sismo).subscribe(dato =>{
      console.log(dato);
      this.irALaListaDeSismo();
    }, error => console.log(error));
    //);
  }

  irALaListaDeSismo(){
    this.router.navigate(['/sismos']);
  }

  onSubmit(){
    console.log(this.sismo);
    this.guardarSismo();
  }

}
