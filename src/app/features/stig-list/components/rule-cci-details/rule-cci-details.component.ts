import { Component, OnInit, Input } from '@angular/core';
import { StigListService } from '../../services/stig-list/stig-list.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-rule-cci-details',
  templateUrl: './rule-cci-details.component.html',
  styleUrls: ['./rule-cci-details.component.sass']
})
export class RuleCciDetailsComponent implements OnInit {
  displayedColumns: string[] = ['cci', 'apAcronym', 'control'];

  @Input() ruleData: Event;
  @Input() resetData: Event;

  currentRuleId: string;
  vulnerabilityDisc: string;
  manualCheckDisc: string;
  fixDisc: string;
  documentable: string;

  dataSource: MatTableDataSource<any>;

  constructor(private stigListService: StigListService) { }

  ngOnInit(): void {
    // this.showRuleDetails();
  }

  ngOnChanges(){
    if(this.resetData['reset']) {
      this.currentRuleId = "";
      this.vulnerabilityDisc = "";
      this.manualCheckDisc = "";
      this.fixDisc = "";
      this.documentable = "";
      this.dataSource = new MatTableDataSource([]);

    } else {
    this.showRuleDetails();
    }
  }

  public showRuleDetails(): void {
    if(this.ruleData) {
    this.stigListService.getDetailedStigRuleData(this.ruleData['benchmarkId'], this.ruleData['revisionStr'], this.ruleData['ruleId']).subscribe(
      data => {
        this.currentRuleId = data.ruleId;
        this.vulnerabilityDisc = data.detail.vulnDiscussion;
        this.manualCheckDisc = data.checks[0].content;
        this.fixDisc = data.fixes[0].text;
        this.documentable = data.detail.documentable;
        this.dataSource = new MatTableDataSource(data.ccis);
      }
    )
    } 
  }

}
