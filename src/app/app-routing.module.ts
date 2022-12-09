import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/pageNotFound/page-not-found.component';
import { AuthGuard } from './loginModule/guards/auth-guard';
import { LoggedInAuthGuard } from './loginModule/guards/logged-in-auth-guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./loginModule/login.module').then((m) => m.LoginModule),
    canActivate: [LoggedInAuthGuard],
  },
  {
    path: 'courses',
    loadChildren: () =>
      import('./coursesPageModule/courses-page.module').then(
        (m) => m.CoursesPageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  // {
  //   path: '**',
  //   component: PageNotFoundComponent,
  // },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '/page-not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuard, LoggedInAuthGuard],
  exports: [RouterModule],
})
export class AppRoutingModule {}
