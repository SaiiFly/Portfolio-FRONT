import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudio } from '../models/estudio';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  URL = 'https://homely-francine-saiifly.koyeb.app/educacion/';

  constructor(private httpClient : HttpClient) { }

  public lista(): Observable<Estudio[]>{
    return this.httpClient.get<Estudio[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Estudio>{
    return this.httpClient.get<Estudio>(this.URL + `detail/${id}`);
  }

  public save(educacion: Estudio): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', educacion);
  }

  public update(id: number, educacion: Estudio): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, educacion);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}