import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { ListeMembresComponent } from './liste-membres/liste-membres.component';
import { MembresService } from './membres.service';

@NgModule({
  declarations: [ListeMembresComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ],
  exports: [ ListeMembresComponent ],
  providers: [ MembresService ],
  bootstrap: []
})
export class MembresModule { }
