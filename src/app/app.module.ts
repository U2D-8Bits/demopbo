import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClient, provideHttpClient } from '@angular/common/http';
import { MainInterceptor } from './core/interceptors/main.interceptor';
import { DATA_IOC } from './infraestructura/data.ioc';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MainInterceptor,
      multi: true
    },
    ...DATA_IOC,
    provideAnimationsAsync(),
      providePrimeNG({
        theme: {
            preset: Aura
            }
      }),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

