import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-crud-usuarios',
  templateUrl: './crud-usuarios.component.html',
  styleUrls: ['./crud-usuarios.component.scss']
})
export class CrudUsuariosComponent implements OnInit {



  data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.'
  ];


  constructor(public msg: NzMessageService) { }

  ngOnInit(): void {
  }

}
