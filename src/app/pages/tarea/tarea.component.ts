import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Tarea } from 'src/app/_model/tarea';
import { TareaService } from 'src/app/_service/tarea.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {

  displayedColumns = ['estado','tarea','acciones'];
  dataSource!: MatTableDataSource<Tarea>;

  constructor(
    private tareaService : TareaService,
    private snackBar : MatSnackBar
    ) { }

  ngOnInit(): void { 
    this.tareaService.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data)
    });

    this.tareaService.tareaCambio.subscribe(data=> {
      this.dataSource = new MatTableDataSource(data)
    });

    this.tareaService.mensajeCambio.subscribe(data =>{
      this.snackBar.open(data, 'AVISO')
    })
  }

  eliminar(id: number){
    this.tareaService.eliminar(id).pipe(switchMap( ()=> {
      return this.tareaService.listar();
    })).subscribe(data =>{
      this.tareaService.setTareaCambio(data);
      this.tareaService.setMensajeCambio('ELIMINADO');
    })
    
  }

}
