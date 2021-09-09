import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StigListLandingPageComponent } from './stig-list-landing-page.component';

describe('StigListLandingPageComponent', () => {
  let component: StigListLandingPageComponent;
  let fixture: ComponentFixture<StigListLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StigListLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StigListLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
