import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Tarea } from 'src/app/_model/tarea';
import { TareaService } from 'src/app/_service/tarea.service';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {

  displayedColumns = ['estado','tarea','acciones'];
  dataSource!: MatTableDataSource<Tarea>;

  constructor(private tareaService : TareaService) { }

  ngOnInit(): void { 
    this.tareaService.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data)
    });

  }

}
