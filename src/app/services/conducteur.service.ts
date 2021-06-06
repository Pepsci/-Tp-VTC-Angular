import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Conducteur } from '../conducteur';

@Injectable({
  providedIn: 'root'
})
export class ConducteurService {
  private baseUrl = 'http://localhost:8080'

  constructor(private http: HttpClient) { }

  listConducteur(): Observable<Conducteur[]>{
    return this.http.get<Conducteur[]>(`${this.baseUrl}/conducteur`);
  }
}
