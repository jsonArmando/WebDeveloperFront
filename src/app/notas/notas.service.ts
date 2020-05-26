import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Notas } from './notas';
import { NOTAS } from './notas.json';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class NotasService {
    private urlEndPoint: string = 'http://localhost:8090/app/notas';
    private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    constructor(private http: HttpClient) {
    }
    getNotas(): Observable<Notas[]> {
       // return of(NOTAS)
        return this.http.get<Notas[]>(this.urlEndPoint);
    }
    create(notas: Notas): Observable<Notas[]> {
        return this.http.post<Notas[]>(this.urlEndPoint, notas, { headers: this.httpHeaders });
    }
    getNota(id): Observable<Notas> {
        return this.http.get<Notas>(`${this.urlEndPoint}/${id}`)
    }
    update(nota: Notas): Observable<Notas> {
        return this.http.put<Notas>(`${this.urlEndPoint}/${nota.id}`, nota, { headers: this.httpHeaders });
    }
}