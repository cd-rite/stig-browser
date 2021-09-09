import { Component, OnInit, Input } from '@angular/core';
import { StigListService } from 'src/app/features/stig-list/services/stig-list/stig-list.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-stig-rule-dashboard',
  templateUrl: './stig-rule-dashboard.component.html',
  styleUrls: ['./stig-rule-dashboard.component.sass']
})
export class StigRuleDashboardComponent implements OnInit {
  displayedColumns: string[] = ['cat', 'ruleId', 'ruleTitle', 'groupId', 'groupTitle', 'autoEval'];
  stigList: String;

  @Input() stigRuleInfo: {benchmarkId: string, revisionStr: string};  


  dataSource: MatTableDataSource<any>;

  constructor(private stigListService: StigListService) {
    this.showStigList();
   }

  ngOnInit(): void {
  }

  public showStigList(): void {
    this.stigListService.getStigRuleList('A10_Networks_ADC_ALG_STIG', 'V2R1').subscribe(
      data => {
        console.log(data);
        this.stigList = data;
        this.dataSource = new MatTableDataSource(data);

      }
    )
  }

}
