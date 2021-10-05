import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stig-list-landing-page',
  templateUrl: './stig-list-landing-page.component.html',
  styleUrls: ['./stig-list-landing-page.component.sass']
})
export class StigListLandingPageComponent implements OnInit {

  public clickedStig: Event;
  public clickedRule: Event;
  public clickedNewStig: Event;

  stigRuleSelected(event: Event)  {
    this.clickedStig = event;
  }

  ruleDetailSelected(event: Event) {
    this.clickedRule = event;
  }

  newStigSelected(event: Event) {
    this.clickedNewStig = event;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
