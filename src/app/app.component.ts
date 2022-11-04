import { Component } from '@angular/core';
import { UserEntity } from './user-entity.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userEntity: UserEntity = {id: 1, firstName: 'Rahul', lastName: 'Patil'};
  title = 'my-app';
}
