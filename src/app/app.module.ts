import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { LogoModule } from './logo/logo.module';
import { CoursesPageModule } from './pages/courses-page/courses-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    LogoModule,
    CoursesPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
