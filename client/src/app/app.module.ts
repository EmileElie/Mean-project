import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MembresModule } from './membres/membres.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MembresModule,
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
