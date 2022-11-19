import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
//import format from 'date-fns/format';
import Swal from 'sweetalert2';
import { RequestBackendService } from '../request-backend.service';
// import { NzMessageService } from 'ng-zorro-antd/message';
interface Vehiculo {
  idVehiculo: string;
  placa: string;
  tipo: string;
  color: string;
  marca: string;
  modelo: string;
  cilindraje: string;
  capacidad: string;
}

@Component({
  selector: 'crud-vehiculos',
  templateUrl: './crud-vehiculos.component.html',
  styleUrls: ['./crud-vehiculos.component.scss'],
})
export class CrudVehiculosComponent implements OnInit {
  vehiculoCurrent: Vehiculo = {
    idVehiculo: '',
    placa: '',
    tipo: '',
    color: '',
    marca: '',
    modelo: '',
    cilindraje: '',
    capacidad: '',
  };
  modeForm = 'adicion';
  showForm = false;
  campoBuscar = '';
  listOfData: Vehiculo[] = [];
  listOfDataAll: Vehiculo[] = [];
  //sedes: any = [];
  //sedeCurrent = '';
  formVehiculo: FormGroup = new FormGroup({});

  constructor(
    private requestBack: RequestBackendService,
    private fb: FormBuilder
  ) {
    this.formVehiculo = this.fb.group({
      placa: [''],
      tipo: [''],
      color: [''],
      marca: [''],
      modelo: [''],
      cilindraje: ['2000'],
      capacidad: [''],
    });
  }

  ngOnInit(): void {
    // this.getUsuarios(sede:String);
  }
  getVehiculos() {
    const entity = 'vehiculos/';
    console.log(entity);

    this.requestBack.getDataVehiculo(entity).subscribe({
      next: (data) => {
        console.log('next');
        this.listOfData = data;
      },
      error: (error) => {
        console.log('error: ' + error);
        this.listOfData = [];
      },
      complete: () => {
        console.log('complete');
      },
    });
  }

  getVehiculosFilter() {
    this.requestBack.getDataVehiculo('vehiculos', this.campoBuscar).subscribe({
      next: (data) => {
        console.log('next');
        this.listOfData = data;
      },
      error: (error) => {
        console.log('error: ' + error);
        this.listOfData = [];
      },
      complete: () => {
        console.log('complete');
      },
    });
  }
  saveVehiculo(): void {
    const datosVehiculo = this.formVehiculo.getRawValue();
    delete datosVehiculo['idVehiculo'];
    this.requestBack
      .addDataVehiculo('vehiculos', JSON.stringify(datosVehiculo))
      .subscribe({
        next: (data) => {
          console.log(data);
          this.showForm = false;
          // this.getUsuarios();
          const cloneList = JSON.parse(JSON.stringify(this.listOfData));
          cloneList.unshift(data);
          this.listOfData = cloneList;
          Swal.fire(
            'Muy bien',
            'Se ha agregado el vehiculo con exito.',
            'success'
          );
        },
        error: (error) => {
          console.log('error: ', error);
          this.listOfData = [];
        },
        complete: () => {
          console.log('complete');
        },
      });
  }
  selectVehiculoEdit(vehiculo: any): void {
    this.showForm = true;
    this.modeForm = 'edicion';
    const vehiculoEdit = JSON.parse(JSON.stringify(vehiculo));

    this.formVehiculo.patchValue(vehiculoEdit);
  }
  editVehiculo(): void {
    const newVehiculo = this.formVehiculo.getRawValue();

    this.requestBack
      .updateDataVehiculo(
        'vehiculos',
        JSON.stringify(newVehiculo),
        newVehiculo.idVehiculo
      )
      .subscribe(
        (data) => {
          const listNueva = JSON.parse(JSON.stringify(this.listOfData));
          for (const i in listNueva) {
            if (listNueva[i].idVehiculo == newVehiculo.idVehiculo) {
              listNueva[i] = newVehiculo;
              break;
            }
          }

          this.listOfData = listNueva;
          this.listOfDataAll = listNueva;
          Swal.fire('¡Usuario editado!', '', 'success');
        },
        (error) => {
          alert('error');
        }
      );
  }
  deleteVehiculo(code: string): void {
    Swal.fire({
      title: '¿Estás seguro de eliminar el vehiculo?',
      // showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
      // denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.requestBack.deleteDataVehiculo('vehiculos', code).subscribe({
          next: (data) => {
            const cloneList = JSON.parse(JSON.stringify(this.listOfData));
            for (const i in cloneList) {
              if (cloneList[i].idVehiculo == code) {
                cloneList.splice(Number(i), 1);
                break;
              }
            }
            this.listOfData = cloneList;
          },
          error: (error) => {
            console.log('error: ' + error);
            this.listOfData = [];
          },
          complete: () => {
            console.log('complete');
          },
        });
      }
    });
  }
  handleCancel(): void {
    this.showForm = false;
  }
  setShowForm(): void {
    this.showForm = !this.showForm;
  }
}
