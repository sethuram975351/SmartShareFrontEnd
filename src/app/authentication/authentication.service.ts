import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../smart-share/domain-models/User';
import {RegisterUserResult} from '../smart-share/domain-models/RegisterUserResult';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    observe: 'response'
  };
  private registerUrl = environment.gatewayUrl + '/administrationserver/register';
  constructor(private httpService: HttpClient) {
  }

  registerUser(userInfo: User) {
    // @ts-ignore
    return this.httpService.post<RegisterUserResult>(this.registerUrl, userInfo, this.httpOptions);
  }

}
