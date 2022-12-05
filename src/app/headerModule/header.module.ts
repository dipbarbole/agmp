import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { LogoModule } from '../components/logoComponent/logo.module';
import { IsAuthenticatedDirective } from '../shared/directives/is-authenticated.directive';

@NgModule({
  declarations: [
    HeaderComponent, 
    IsAuthenticatedDirective
  ],
  imports: [
    CommonModule,
    LogoModule
  ],
  exports: [HeaderComponent, IsAuthenticatedDirective],
})
export class HeaderModule {}
