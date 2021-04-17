import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarea } from '../_model/tarea';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  constructor(private http : HttpClient) { }

  listar(){
    return this.http.get<Tarea[]>(`${environment.HOST}/tareas`);
  }

  listarPorId(id:number){
    return this.http.get<Tarea>(`${environment.HOST}/tareas/${id}`);
  }
}
