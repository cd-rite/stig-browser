import { Component, OnInit, Input, OnChanges, Output, EventEmitter, ViewChild } from '@angular/core';
import { StigListService } from 'src/app/features/stig-list/services/stig-list/stig-list.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-stig-rule-dashboard',
  templateUrl: './stig-rule-dashboard.component.html',
  styleUrls: ['./stig-rule-dashboard.component.sass']
})
export class StigRuleDashboardComponent implements OnInit, OnChanges {
  displayedColumns: string[] = ['cat', 'ruleId', 'ruleTitle', 'groupId', 'groupTitle', 'autoEval'];
  stigList: String;

  @Input() stigData: Event;
  @Output() ruleDetailData = new EventEmitter<object>();
  @Output() ruleDetailReset = new EventEmitter<object>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  dataSource: MatTableDataSource<any>;

  constructor(private stigListService: StigListService) {
    this.showStigList();
   }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.showStigList();
  }

  public showStigList(): void {
    if(this.stigData) {
    this.stigListService.getStigRuleList(this.stigData['benchmarkId'], this.stigData['revisionStr']).subscribe(
      data => {
        console.log(data);
        this.stigList = data;
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

      }
    )
    }
  }

  public getRecord(row): void {
    this.ruleDetailData.emit({benchmarkId: this.stigData['benchmarkId'], revisionStr: this.stigData['revisionStr'], ruleId: row.ruleId})
    this.ruleDetailReset.emit({reset: false});

  }

}
