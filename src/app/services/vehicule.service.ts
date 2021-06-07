import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehicule } from '../vehicule';

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {
  private baseUrl = 'http://localhost:8080'

  constructor(private http: HttpClient) { }

  listVehicule(): Observable<Vehicule[]>{
    return this.http.get<Vehicule[]>(`${this.baseUrl}/vehicule`);
  }
}
