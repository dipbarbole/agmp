import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./loginModule/login.module').then(m => m.LoginModule)
  },
  {
    path: 'courses',
    loadChildren: () =>
      import('./coursesPageModule/courses-page.module').then(m => m.CoursesPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
