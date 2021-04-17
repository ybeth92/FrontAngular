import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarea } from '../_model/tarea';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  tareaCambio = new Subject<Tarea[]>();
  mensajeCambio = new Subject<string>();

  private url = `${environment.HOST}/tareas`

  constructor(private http : HttpClient) { }

  listar(){
    return this.http.get<Tarea[]>(this.url);
  }

  listarPorId(id:number){
    return this.http.get<Tarea>(`${this.url}/${id}`);
  }

  registrar(tarea : Tarea){
    return this.http.post(this.url, tarea);
  }

  modificar(tarea : Tarea){
    return this.http.put(this.url, tarea);
  }

  eliminar(id:number){
    return this.http.delete(`${this.url}/${id}`);
  }

  getTareaCambio(){
    return this.tareaCambio.asObservable();
  }

  setTareaCambio(tareas : Tarea[]){
    this.tareaCambio.next(tareas);
  }

  getMensajeCambio(){
    return this.mensajeCambio.asObservable();
  }

  setMensajeCambio(mensaje: string){
    return this.mensajeCambio.next(mensaje);
  }
}
