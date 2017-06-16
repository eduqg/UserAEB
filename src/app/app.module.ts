import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { HttpuserComponent } from './httpuser/httpuser.component';
import { HTTPUserService } from './httpuser/httpuser.service';
@NgModule({
  declarations: [
    AppComponent,
    HttpuserComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [HTTPUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
