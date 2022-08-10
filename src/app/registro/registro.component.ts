import { Component, OnInit } from '@angular/core';
import { Registro } from '../models/registro.model';
import { RegistroService } from '../services/registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


  idCliente!: number;
  nombre1!: string;
  nombre2!: string;
  apellido1!: string;
  apellido2!:string;
  email!: string;
  password!: string;
  direccion!: string;
  telefono!: string;
  ciudad!:string;
  provincia!: string;

  data!:Registro;


  constructor(private registro:RegistroService) {}

  ngOnInit(): void {
  }

  // "registro1" : [
  //   {
  //     idCliente: 0;
  //     nombre1: "";
  //     nombre2: "";
  //     apellido1: "";
  //     apellido2:"";
  //     email: "";
  //     password: "";
  //     direccion: "";
  //     telefono: "";
  //     ciudad:"";
  //     provincia: "";
  //     esEmpleado: 0,
  //   }
  // ]

  enviarRegistro():any{
    this.data.idCliente= this.idCliente;
    this.data.nombre1= this.nombre1;
    this.data.nombre2= this.nombre2;
    this.data.apellido1= this.apellido1;
    this.data.apellido2= this.apellido2;
    this.data.email= this.email;
    this.data.password1= this.password;
    this.data.direccion= this.direccion;
    this.data.telefono= this.telefono;
    this.data.ciudad= this.ciudad;
    this.data.provincia= this.provincia;
    this.data.esEmpleado= 0;

    console.log(this.data);

    let response=this.registro.registroUsuario(this.data).subscribe(x =>{
      console.log(x);
      return x;
    });
    return response;
  }


}
