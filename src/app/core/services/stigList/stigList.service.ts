import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StigListService {
  private stigUrl: string = 'http://localhost:64001/api/stigs';

  constructor(private httpClient: HttpClient) { }

  public getLicensedProducts(): Observable<String> {
    return this.httpClient.get<String>(this.stigUrl);
  }

//   public updateLicense(cipherText: string) {
//     return this.httpClient.post(this.licenseUrl, cipherText, { observe: 'response', responseType: 'json' });
//   }
}