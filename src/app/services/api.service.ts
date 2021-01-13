import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(protected httpClient: HttpClient) {
  }

  public generateTokenSunat(client_id, client_secret): Observable<any> {
    const url = `https://api-seguridad.sunat.gob.pe/v1/clientesextranet/${client_id}/oauth2/token/`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    const payload = new HttpParams()
      .set('grant_type', 'client_credentials')
      .set('scope', 'https://api.sunat.gob.pe/v1/contribuyente/contribuyentes')
      .set('client_id', client_id)
      .set('client_secret', client_secret);
    return this.httpClient.post<any>(url, payload, {headers});
  }
}
