import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudUsuariosComponent } from './crud-usuarios/crud-usuarios.component';
import {NzListModule} from 'ng-zorro-antd/list';

@NgModule({
  declarations: [
    AppComponent,
    CrudUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
