import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudUsuariosComponent } from './crud-usuarios/crud-usuarios.component';
//import {NzMessageService} from 'ng-zorro-antd/NzMessageService';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { CrudVehiculosComponent } from './crud-vehiculos/crud-vehiculos.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { CambioContraseniaComponent } from './crud-usuarios/cambio-contrasenia/cambio-contrasenia.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudUsuariosComponent,
    LayoutComponent,
    CrudVehiculosComponent,
    CambioContraseniaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzTableModule,
    NzDividerModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzButtonModule,
    NzSpaceModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    // NzMessageService
    ReactiveFormsModule,
    NzModalModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
