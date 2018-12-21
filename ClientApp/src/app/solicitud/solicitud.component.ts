import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-solicitud-component',
  templateUrl: './solicitud.component.html'
})
export class SolicitudComponent {
  constructor(private http: HttpClient) {}
  solicitud = { FK_USUARIO_SOLICITA: "3", FK_USUARIO_VALIDA: "1", dateFechaInicio: "2018-12-27", dateFechaTermino: "2018-12-27", dateFechaSolicitud: "2018-12-20", tintEstado: 0, tintVacaciones: 1 };

  save(sol: Solicitud): Observable<Solicitud> {
    let result: Observable<Solicitud>;

    console.log("Entramos a save");
    console.log(sol);
    let header = new HttpHeaders().set("content-type", "application/json");
    /* if (sugarLevel.id) {
       this.http.put<Solicitud>(
         'http://localhost/Api-Taquilla/api/solicitudes/${sugarLevel.id},
         sugarLevel
       );
     } else {*/
    //this.http.post<Solicitud>('http://localhost/Api-Taquilla/api/solicitudes', sol).subscribe(status => console.log(JSON.stringify(status)), error => console.error(error));


    this.http.post('http://localhost/Api-Taquilla/api/solicitudes', sol ).subscribe(status => console.log(JSON.stringify(status)), error => console.error(error));



    //}
    return result;
  }
}


interface Solicitud {
  FK_USUARIO_SOLICITA: string;
  FK_USUARIO_VALIDA: string;
  dateFechaInicio: string;
  dateFechaTermino: string;
  dateFechaSolicitud: string;
  tintEstado: number;
  tintVacaciones: number;
}
