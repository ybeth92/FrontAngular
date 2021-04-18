import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Tarea } from 'src/app/_model/tarea';
import { TareaService } from 'src/app/_service/tarea.service';

@Component({
  selector: 'app-tarea-edicion',
  templateUrl: './tarea-edicion.component.html',
  styleUrls: ['./tarea-edicion.component.css']
})
export class TareaEdicionComponent implements OnInit {

  form!: FormGroup;
  id!: number;
  edicion!: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tareaService : TareaService
    ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      'id' : new FormControl(0),
      'tarea' : new FormControl(''),
      'estado' : new FormControl('')
    });

    this.route.params.subscribe((data : Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.initForm();
    });
  }

  private initForm() {
    if (this.edicion) {
      this.tareaService.listarPorId(this.id).subscribe(data => {
        this.form = new FormGroup({
          'id': new FormControl(data.id),
          'tarea': new FormControl(data.tarea),
          'estado': new FormControl(data.estado)
        });
      });
    }
  }

  operar(){
    let tarea = new Tarea();
    tarea.id = this.form.value['id'];
    tarea.tarea = this.form.value['tarea'];
    tarea.estado = this.form.value['estado'];
    
    if (this.edicion) {
      
      this.tareaService.modificar(tarea).pipe(switchMap( () =>{
        return this.tareaService.listar()
      })).subscribe(data =>{
        this.tareaService.tareaCambio.next(data);
        this.tareaService.mensajeCambio.next('MODIFICADO');
      });

    } else {
      this.tareaService.registrar(tarea).subscribe(()=> {
        this.tareaService.listar().subscribe(data =>{
          this.tareaService.tareaCambio.next(data);
          this.tareaService.mensajeCambio.next('REGISTRADO');
        });
      });
    }
    this.router.navigate(['/']);
  }

}
