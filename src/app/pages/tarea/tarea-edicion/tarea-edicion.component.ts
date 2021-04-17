import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
      'tarea' : new FormControl('')
    });

    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.initForm();
    });
  }

  private initForm() {
    if (this.edicion) {
      this.tareaService.listarPorId(this.id).subscribe(data => {
        this.form = new FormGroup({
          'tarea': new FormControl(data.tarea)
          
        });
      });
    }
  }

  operar(){
    
  }

}
