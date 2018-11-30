import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ListeMembresComponent } from './membres/liste-membres/liste-membres.component'

const routes: Routes = [
	{ path : '', redirectTo: '/membres', pathMatch: 'full' },
	// { path : '', component: AppComponent },
	{ path : 'membres', component: ListeMembresComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
