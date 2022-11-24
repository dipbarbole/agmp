import { Component, ViewEncapsulation } from '@angular/core';
import { USER_DATA } from '../constants/constant';
import { UserEntity } from '../interfaces/user-entity.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  IuserEntity: UserEntity = USER_DATA;
  title = 'my-app';
}
