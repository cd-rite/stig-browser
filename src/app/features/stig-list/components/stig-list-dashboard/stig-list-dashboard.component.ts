import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StigListService } from 'src/app/features/stig-list/services/stig-list/stig-list.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-stig-list-dashboard',
  templateUrl: './stig-list-dashboard.component.html',
  styleUrls: ['./stig-list-dashboard.component.sass']
})
export class StigListDashboardComponent implements OnInit {
  displayedColumns: string[] = ['benchmarkId', 'title', 'lastRevisionStr', 'lastRevisionDate'];
  stigList: String;

  @Output() stigRuleData = new EventEmitter<object>();
 
  dataSource: MatTableDataSource<any>;
  constructor(private stigListService: StigListService) {
    this.showStigList();
   }

  ngOnInit(): void {
  }

  public showStigList(): void {
    this.stigListService.getStigList().subscribe(
      data => {
        console.log(data);
        this.stigList = data;
        this.dataSource = new MatTableDataSource(data);

      }
    )
  }

  public getRecord(row): void {
    // console.log(row.benchmarkId);
    this.stigRuleData.emit({benchmarkId: row.benchmarkId, revisionStr: row.lastRevisionStr});
    // this.stigRuleInfo.revisionStr = row.lastRevisionStr;
  }
  

}
