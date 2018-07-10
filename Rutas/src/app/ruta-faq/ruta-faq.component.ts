import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-ruta-faq',
  templateUrl: './ruta-faq.component.html',
  styleUrls: ['./ruta-faq.component.scss']
})
export class RutaFAQComponent implements OnInit {

  constructor(private _httpClient: HttpClient) {
  }

  ngOnInit() {
    const url = 'https://jsosnplaceholder.typicode.com/posts';

    const requestHttp$ = this._httpClient
      .post(url,{
        nombre:'Adrian',
        edad:29,
        casado:false
      });

    console.log('Inicio');
    requestHttp$
      .subscribe(
        (respuestaOk) => {
          console.log(respuestaOk);
        },
        (respuestaError) => {
          console.log(respuestaError);
        },
        () => {
          console.log('Completado');
        }
      );
    console.log('Fin');


  }

}
