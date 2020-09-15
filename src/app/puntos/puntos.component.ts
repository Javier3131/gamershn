import { Component, OnInit } from '@angular/core';
import { PuntosService } from 'app/services/puntos.service';

export interface Punto {
  nombre: string;
  alias: string;
  puntos: number;
  correo: string;
  liga: number;
  plataforma: string;
  id: string;
  gameId: string;
  partidas: number;
  kills: number;
  ls1: number;
  lsq1: number;
  l2: number;
  l3: number;
  borrado: boolean;
}

@Component({
  selector: 'app-puntos',
  templateUrl: './puntos.component.html',
  styleUrls: ['./puntos.component.scss'],
})
export class PuntosComponent implements OnInit {
  divisiones = true;
  unificada = false;

  puntos1 = [];
  puntos2 = [];
  dataUnificada = [];
  constructor(private puntosService: PuntosService) {}

  ngOnInit() {
    // var rellaxHeader = new Rellax('.rellax-header');

    // var body = document.getElementsByTagName("body")[0];
    // body.classList.add("landing-page");
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('bg-dark');
    navbar.classList.add('navbar-dark');
    navbar.classList.remove('navbar-transparent');
    navbar.classList.remove('navbar-transparent');
    navbar.classList.remove('bg-white');
    // navbar.classList.add("navbar-transparent");

    this.getPuntos();
    this.getDataUnificada();
  }
  ngOnDestroy() {
    // var body = document.getElementsByTagName("body")[0];
    // body.classList.remove("landing-page");
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('bg-dark');
    navbar.classList.remove('navbar-dark');
    navbar.classList.add('bg-white');
    navbar.classList.add('navbar-transparent');
    // navbar.classList.remove("navbar-transparent");
  }

  getPuntos() {
    // this.puntosService.getPuntos().subscribe((res) => (this.puntos = res));

    this.puntosService.getPuntos(1).subscribe((res) => {
      this.puntos1 = res;
      console.log(this.puntos1);
    });

    this.puntosService.getPuntos(2).subscribe((res) => {
      this.puntos2 = res;
      console.log(this.puntos2);
    });
  }

  getDataUnificada(): void {
    this.puntosService.getPuntosUnificados().subscribe((res) => {
      this.dataUnificada = res;
      console.log(this.dataUnificada);
    });
  }

  onVistaDivisiones(): void {
    console.log(this.divisiones);
  }

  onVistaUnificada(): void {
    console.log(this.unificada);
  }
}
