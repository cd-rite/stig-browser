import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StigListLandingPageComponent } from './features/stig-list/pages/stig-list-landing-page/stig-list-landing-page.component';

const routes: Routes = [  // tslint:disable-next-line: max-line-length
  {path: 'home', component: StigListLandingPageComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
