import {Component} from '@angular/core';
import {user} from "../../../types/user.type";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  title: string = 'Examen 1 - Desarrollo para Dispositivos Inteligentes';

  // * listado de los datos de cada usuario
  public users: user[] = [
    {name: 'Juan', id: 1, birthday: '12/12/2007', email: 'juan@gmail.com'},
    {name: 'Pedro', id: 2, birthday: '12/12/2005', email: 'pedro@gmail.com'},
    {name: 'Maria', id: 3, birthday: '12/12/2008', email: 'maria@gmail.com'},
    {name: 'Luis', id: 4, birthday: '12/12/1996', email: 'luis@gmail.com'},
    {name: 'Ana', id: 5, birthday: '12/12/1990', email: 'ana@gmail.com'},
  ];
}
