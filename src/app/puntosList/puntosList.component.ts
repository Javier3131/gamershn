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
}

@Component({
  selector: 'app-puntosList',
  templateUrl: './puntosList.component.html',
  styleUrls: ['./puntosList.component.scss'],
})
export class PuntosListComponent implements OnInit {
  puntos1: Punto[] = [];
  puntos2: Punto[] = [];
  nuevoP: Punto = {
    alias: '',
    nombre: '',
    puntos: 0,
    correo: '',
    liga: 1,
    plataforma: '',
    id: '',
    gameId: '',
    partidas: 0,
    kills: 0,
    ls1: 0,
    lsq1: 0,
    l2: 0,
    l3: 0
  };

  constructor(private puntosService: PuntosService) {}

  ngOnInit() {
    // var rellaxHeader = new Rellax('.rellax-header');

    // var body = document.getElementsByTagName("body")[0];
    // body.classList.add("landing-page");
    let navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('bg-dark');
    navbar.classList.add('navbar-dark');
    navbar.classList.add('navbar-dark');
    navbar.classList.remove('navbar-transparent');
    navbar.classList.remove('navbar-transparent');
    navbar.classList.remove('bg-white');
    // navbar.classList.add("navbar-transparent");

    this.getPuntos();
  }
  ngOnDestroy() {
    // var body = document.getElementsByTagName("body")[0];
    // body.classList.remove("landing-page");
    let navbar = document.getElementsByTagName('nav')[0];
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

  onUpdatePuntos(data) {
    console.log(data);
    this.puntosService.updatePuntos(data);
  }

  onCreatePuntos() {
    // console.log(this.nuevoP);
    this.puntosService
      .createPuntos(this.nuevoP)
      .then((result) => {
        console.log(result);
        this.nuevoP = {
          alias: '',
          nombre: '',
          puntos: 0,
          correo: '',
          liga: 1,
          plataforma: '',
          id: '',
          gameId: '',
          partidas: 0,
          kills: 0,
          ls1: 0,
          lsq1: 0,
          l2: 0,
          l3: 0
        };
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
