import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-sismos',
  templateUrl: './info-sismos.component.html',
  styleUrls: ['./info-sismos.component.css']
})
export class InfoSismosComponent implements OnInit{
  src="https://blogs.egu.eu/divisions/sm/files/2020/10/title-03-03-700x400.png"
  alt= "portada"
  description='';
  constructor(){}


  ngOnInit(){
    
  }
}
