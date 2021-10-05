import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StigListService {
  //need to change to be environment variable
  private stigUrl: string = 'http://localhost:64001/api';

  constructor(private httpClient: HttpClient) { }

  public getStigList(): Observable<any> {
    return this.httpClient.get<any>(this.stigUrl + '/stigs');
  }

  public getStigRuleList(benchmarkId: string, revisionStr: string): Observable<any> {
    return this.httpClient.get<any>(this.stigUrl + '/stigs/' + benchmarkId + '/revisions/' + revisionStr + '/rules'
                                    + '?projection=detail&projection=ccis&projection=checks&projection=fixes');
  
  }

  public getDetailedStigRuleData(benchmarkId: string, revisionStr: string, ruleId: string): Observable<any> {
    return this.httpClient.get<any>(this.stigUrl + '/stigs/' + benchmarkId + '/revisions/' + revisionStr + '/rules/'
                                    + ruleId + '?projection=detail&projection=ccis&projection=checks&projection=fixes');
  
  }

}