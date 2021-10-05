import { Component, OnInit } from '@angular/core';
import { faUserCircle, faUser, faIdCard, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  faUserCircle = faUserCircle;
  faUser = faUser;
  faIdCard = faIdCard;
  faSignOutAlt = faSignOutAlt;

  constructor(private oauthService: OAuthService) { }

  public login() {
    this.oauthService.initLoginFlow();
  }

  public logoff() {
    this.oauthService.logOut();
  }

  ngOnInit(): void {
  }

}
