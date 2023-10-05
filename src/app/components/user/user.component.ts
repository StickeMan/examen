import {Component, Input} from '@angular/core';
import {user} from "../../../types/user.type";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input()
  userData: user[] = [{
    name: '',
    id: 0,
    birthday: '',
    email: '',
  }];

  // * resultado de la edad.
  public ageResult: number = 0

  // * metodo para obtener la edad del usuario.
  public viewAge(birthday: string) {
    const dateOld = new Date(birthday)

    const yearNow = new Date()

    const age: number = yearNow.getFullYear() - dateOld.getFullYear()

    this.ageResult = age;
  }
}
