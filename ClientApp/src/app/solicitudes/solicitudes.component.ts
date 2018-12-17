import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html'
})
export class SolicitudesComponent {
  public solicitudes: Solicitud[];

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Solicitud[]>('http://localhost/Api-Taquilla/api/solicitudes').subscribe(result => {
      this.solicitudes = result;
    }, error => console.error(error));

  }

  save(sol: Solicitud): Observable<Solicitud> {
    let result: Observable<Solicitud>;

    console.log("Entramos a save");
    console.log(sol);
   /* if (sugarLevel.id) {
      this.http.put<Solicitud>(
        'http://localhost/Api-Taquilla/api/solicitudes/${sugarLevel.id},
        sugarLevel
      );
    } else {*/
    result = this.http.post<Solicitud>('http://localhost/Api-Taquilla/api/solicitudes', sol);
    //}
    return result;
  }
}

interface Solicitud {
  PK_ID: number;
  FK_USUARIO_SOLICITA: string;
  FK_USUARIO_VALIDA: string;
  dateFechaInicio: string;
  dateFechaTermino: string;
  tintEstado: number;
}

