import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { StigListService } from 'src/app/features/stig-list/services/stig-list/stig-list.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-stig-list-dashboard',
  templateUrl: './stig-list-dashboard.component.html',
  styleUrls: ['./stig-list-dashboard.component.sass']
})
export class StigListDashboardComponent implements OnInit {
  displayedColumns: string[] = ['benchmarkId', 'title', 'lastRevisionStr', 'lastRevisionDate'];
  stigList: String;

  @Output() stigRuleData = new EventEmitter<object>();
  @Output() ruleDetailReset = new EventEmitter<object>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
 
  dataSource: MatTableDataSource<any>;
  constructor(private stigListService: StigListService) {
    this.showStigList();
   }

  ngOnInit(): void {
  }

  public showStigList(): void {
    this.stigListService.getStigList().subscribe(
      data => {
        this.stigList = data;
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

      }
    )
  }

  public getRecord(row): void {
    this.stigRuleData.emit({benchmarkId: row.benchmarkId, revisionStr: row.lastRevisionStr});
    this.ruleDetailReset.emit({reset: true});

  }

}
