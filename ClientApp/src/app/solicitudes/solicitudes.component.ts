import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html'
})
export class SolicitudesComponent {
  public solicitudes: Solicitud[];

  constructor(private http: HttpClient) {
    http.get<Solicitud[]>('http://localhost/Api-Taquilla/api/solicitudes').subscribe(result => {
      this.solicitudes = result;
    }, error => console.error(error));

  }

  validar(pkid,st) {
    this.http.get('http://localhost/Api-Taquilla/api/solicitudes/' + pkid + '/' + st).subscribe();
    window.location.reload();
  }
  
}


interface Solicitud {
  PK_ID?: number;
  FK_USUARIO_SOLICITA: string;
  FK_USUARIO_VALIDA: string;
  dateFechaInicio: string;
  dateFechaTermino: string;
  dateFechaSolicitud: string;
  tintEstado: number;
}

