import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StigListLandingPageComponent } from './pages/stig-list-landing-page/stig-list-landing-page.component';
import { StigListDashboardComponent } from './components/stig-list-dashboard/stig-list-dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StigRuleDashboardComponent } from './components/stig-rule-dashboard/stig-rule-dashboard.component';
import { HeaderComponent } from 'src/app/core/components/header/header.component';
import { RuleCciDetailsComponent } from './components/rule-cci-details/rule-cci-details.component';

@NgModule({
  declarations: [
    HeaderComponent,
    StigListLandingPageComponent,
    StigListDashboardComponent,
    StigRuleDashboardComponent,
    RuleCciDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class StigListModule { }