import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SharedModule } from 'src/app/shared/shared.module';
import { StigListLandingPageComponent } from './pages/stig-list-landing-page/stig-list-landing-page.component';
import { StigListDashboardComponent } from './components/stig-list-dashboard/stig-list-dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StigRuleDashboardComponent } from './components/stig-rule-dashboard/stig-rule-dashboard.component';

@NgModule({
  declarations: [
    StigListLandingPageComponent,
    StigListDashboardComponent,
    StigRuleDashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class StigListModule { }