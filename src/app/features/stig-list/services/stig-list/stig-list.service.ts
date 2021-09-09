import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StigListService {
  private stigUrl: string = 'http://localhost:64001/api';

  constructor(private httpClient: HttpClient) { }

  public getStigList(): Observable<any> {
    return this.httpClient.get<any>(this.stigUrl + '/stigs');
  }

  public getStigRuleList(benchmarkId: string, revisionStr: string): Observable<any> {
    return this.httpClient.get<any>(this.stigUrl + '/stigs/' + benchmarkId + '/revisions/' + revisionStr + '/rules');
  
  }
//   public updateLicense(cipherText: string) {
//     return this.httpClient.post(this.licenseUrl, cipherText, { observe: 'response', responseType: 'json' });
//   }
}