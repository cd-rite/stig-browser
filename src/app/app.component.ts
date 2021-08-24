import { Component } from '@angular/core';
import { OAuthService, NullValidationHandler, AuthConfig } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc';
import { StigListService } from 'src/app/core/services/stigList/stigList.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'stig-browser';

  stigList: String;

  constructor(private oauthService: OAuthService,
              private stigListService: StigListService) {
    this.configure();
    this.showStigList();
  }

  authConfig: AuthConfig = {
    issuer: 'http://localhost:8080/auth/realms/stigman',
    redirectUri: 'http://localhost:4200',
    clientId: 'stig-manager',
    scope: 'stig-manager:stig:read openid',
    responseType: 'code',
    // at_hash is not present in JWT token
    disableAtHashCheck: true,
    showDebugInformation: true
  }
  
  public login() {
    this.oauthService.initCodeFlow();
  }
  
  public logoff() {
    this.oauthService.logOut();
  }

  public showStigList(): void {
    this.stigListService.getLicensedProducts().subscribe(
      data => {
        console.log(data);
        this.stigList = data;
      }
    )
    console.log(this.stigList);
  }
  
  private configure() {
    this.oauthService.configure(this.authConfig);
    this.oauthService.tokenValidationHandler = new  NullValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndLogin();
  }



}
