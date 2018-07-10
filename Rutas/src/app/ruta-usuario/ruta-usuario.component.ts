import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-ruta-usuario',
  templateUrl: './ruta-usuario.component.html',
  styleUrls: ['./ruta-usuario.component.scss']
})
export class RutaUsuarioComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    const observableParametrosRuta$ = this._activatedRoute.params;

    observableParametrosRuta$
      .subscribe(
        (respuestaOk) => {
          console.log(respuestaOk);
        },
        (respuestaError) => {

        },
        () => {
          // completa
        }
      )


  }


}


/*
function hola() {
  return 'Hola';
}

var a = hola; // Definicion Fn
var b = hola(); // 'Hola'

*/











