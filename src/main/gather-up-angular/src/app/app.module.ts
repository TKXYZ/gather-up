import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
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
    // NGXLogger Configuration (https://github.com/dbfannin/ngx-logger/blob/HEAD/docs/config.md)
    LoggerModule.forRoot({
      level: NgxLoggerLevel.DEBUG, // only log messages of this level or higher (OFF disables the logger for the client) (TRACE|DEBUG|INFO|LOG|WARN|ERROR|FATAL|OFF)
      httpResponseType: 'json', // the response type of the HTTP Logging request
      timestampFormat: 'short', // format for the timestamp displayed with each log message
      colorScheme: ['purple', 'teal', 'gray', 'gray', 'red', 'red', 'red'] // TRACE|DEBUG|INFO|LOG|WARN|ERROR|FATAL|OFF
    })
  ],
  providers: [
    DatePipe // for NGXLogger to use timestampFormat config option
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
