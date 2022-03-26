import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {LoggerModule, NgxLoggerLevel} from "ngx-logger";

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {EventsComponent} from './events/events.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    EventsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    // NGX Logger Configuration
    LoggerModule.forRoot({
      serverLoggingUrl: 'http://localhost:9999/api/logs', // URL to POST logs
      level: NgxLoggerLevel.DEBUG, // only log messages of this level or higher (OFF disables logger for client)
      serverLogLevel: NgxLoggerLevel.ERROR, // only send log messages of this level or higher to the server (OFF disables logger for server)
      timestampFormat: 'long', // format for the timestamp displayed w/ each log message
      colorScheme: ['purple', 'teal', 'gray', 'gray', 'red', 'red', 'red'] // TRACE|DEBUG|INFO|LOG|WARN|ERROR|FATAL|OFF
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
