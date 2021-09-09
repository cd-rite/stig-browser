import { Component, OnInit } from '@angular/core';
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
  stigRuleInfo: 
    {benchmarkId: string, revisionStr: string};  


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
    this.stigRuleInfo = {benchmarkId: row.benchmarkId, revisionStr: row.lastRevisionStr};
    // this.stigRuleInfo.revisionStr = row.lastRevisionStr;
  }
  

}
