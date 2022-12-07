import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './appComponent/app.component';
import { BreadcrumbsModule } from './breadCrumbsModule/breadcrumbs.module';
import { FooterModule } from './components/footerComponent/footer.module';
import { HeaderModule } from './headerModule/header.module';
import { CoursesPageModule } from './coursesPageModule/courses-page.module';
import '@fortawesome/fontawesome-free/js/all.js';

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
