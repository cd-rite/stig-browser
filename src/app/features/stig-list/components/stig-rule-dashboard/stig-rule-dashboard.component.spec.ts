import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StigRuleDashboardComponent } from './stig-rule-dashboard.component';

describe('StigRuleDashboardComponent', () => {
  let component: StigRuleDashboardComponent;
  let fixture: ComponentFixture<StigRuleDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StigRuleDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StigRuleDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
