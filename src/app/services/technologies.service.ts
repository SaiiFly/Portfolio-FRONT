import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tech } from '../models/tech';

@Injectable({
  providedIn: 'root'
})
export class TechnologiesService {
  URL = 'portfolio-back.homely-francine.koyeb/technologies/';
  
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Tech[]>{
    return this.httpClient.get<Tech[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Tech>{
    return this.httpClient.get<Tech>(this.URL + `detail/${id}`);
  }

  public save(tech: Tech): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', tech);
  }

  public update(id: number, tech: Tech): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, tech);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete(this.URL + `delete/${id}`);
  }
}
