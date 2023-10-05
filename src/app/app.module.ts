import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { UserComponent } from './components/user/user.component';
import {FormsModule} from '@angular/forms';
import { ComparativePipe } from './pipes/comparative.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UserComponent,
    ComparativePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
