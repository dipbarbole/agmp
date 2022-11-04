import { Component } from '@angular/core';
import { USER_DATA } from './constant';
import { UserEntity } from './user-entity.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  IuserEntity: UserEntity = USER_DATA;
  title = 'my-app';
}
