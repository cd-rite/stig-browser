import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StigListDashboardComponent } from './stig-list-dashboard.component';

describe('StigListDashboardComponent', () => {
  let component: StigListDashboardComponent;
  let fixture: ComponentFixture<StigListDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StigListDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StigListDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
