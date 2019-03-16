import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registro de Datos';

  employees=[
  {'name':'Alex',position:'DevManagement'},
  {'name':'Oso',position:'Designer'},
  {'name':'Cote',position:'Programmer'},
  ];

  model:any={};

  addEmployee():void{
      this.employees.push(this.model);
  }
  deleteEmployee():void{

  }
  editEmployee():void{

  }
  updateEmployee():void{

  }
}
