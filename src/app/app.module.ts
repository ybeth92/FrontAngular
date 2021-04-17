import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TareaComponent } from './pages/tarea/tarea.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { TareaEdicionComponent } from './pages/tarea/tarea-edicion/tarea-edicion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TareaDialogComponent } from './pages/tarea/tarea-dialog/tarea-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TareaComponent,
    TareaEdicionComponent,
    TareaDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
