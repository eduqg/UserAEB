import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { FormsModule } from '@angular/forms';

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
    FormsModule,
    HttpModule
  ],
  providers: [HTTPUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
