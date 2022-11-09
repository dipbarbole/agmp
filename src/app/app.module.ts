import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadcrumbsModule } from './breadcrumbs/breadcrumbs.module';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
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
    CoursesPageModule,
    BreadcrumbsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
