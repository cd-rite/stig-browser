import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleCciDetailsComponent } from './rule-cci-details.component';

describe('RuleCciDetailsComponent', () => {
  let component: RuleCciDetailsComponent;
  let fixture: ComponentFixture<RuleCciDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuleCciDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleCciDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
