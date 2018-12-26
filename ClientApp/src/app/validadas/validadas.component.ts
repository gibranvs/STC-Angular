import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-validadas',
  templateUrl: './validadas.component.html'
})
export class ValidadasComponent {
  public solicitudes: Solicitud[];

  constructor(private http: HttpClient) {
    let obj:any=null;
    obj=
      {
        "val1":"Attribute1"
      };
    http.post<Solicitud[]>('http://localhost/Api-Taquilla/api/solicitudes/1',obj).subscribe(result => {
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
  tintVacaciones: number;
}

