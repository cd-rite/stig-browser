import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { StigListService } from 'src/app/features/stig-list/services/stig-list/stig-list.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-stig-rule-dashboard',
  templateUrl: './stig-rule-dashboard.component.html',
  styleUrls: ['./stig-rule-dashboard.component.sass']
})
export class StigRuleDashboardComponent implements OnInit, OnChanges {
  displayedColumns: string[] = ['cat', 'ruleId', 'ruleTitle', 'groupId', 'groupTitle', 'autoEval'];
  stigList: String;

  @Input() stigData: Event;


  dataSource: MatTableDataSource<any>;

  constructor(private stigListService: StigListService) {
    this.showStigList();
   }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if(this.stigData) {
    console.log(this.stigData.benchmarkId);
    }
    this.showStigList();
  }

  public showStigList(): void {
    if(this.stigData) {
    this.stigListService.getStigRuleList(this.stigData.benchmarkId, this.stigData.revisionStr).subscribe(
      data => {
        console.log(data);
        this.stigList = data;
        this.dataSource = new MatTableDataSource(data);

      }
    )
    }
  }

}
