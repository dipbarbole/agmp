import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './appComponent/app.component';
import { BreadcrumbsModule } from './breadCrumbsModule/breadcrumbs.module';
import { FooterModule } from './components/footerComponent/footer.module';
import { HeaderModule } from './headerModule/header.module';
import { CoursesPageModule } from './coursesPageModule/courses-page.module';
import '@fortawesome/fontawesome-free/js/all.js';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpHeaderInterceptor } from './interceptors/http-header.interceptor';
import { LoaderComponent } from './components/loaderComponent/loader.component';
import { LoadingInterceptor } from './interceptors/loading.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    CoursesPageModule,
    BreadcrumbsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpHeaderInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
