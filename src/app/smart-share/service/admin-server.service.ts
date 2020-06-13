import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {UsersMetadata} from '../domain-models/UsersMetadata';
import {BucketAccessRequestDto} from '../domain-models/BucketAccessRequestDto';
import {environment} from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AdminServerService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpService: HttpClient) {
  }

  createAccessRequest(body) {
    const createAccessRequestUrl = environment.gatewayUrl + '/administrationserver/object/createAccessRequest';
    return this.httpService.post<any>(createAccessRequestUrl, body, this.httpOptions)
      .pipe(
        tap(data => {
          console.log(data);
        })
      );
  }

  createBucketAccessRequest(body) {
    const createAccessRequestUrl = environment.gatewayUrl + '/administrationserver/bucket/createAccessRequest';
    return this.httpService.post<any>(createAccessRequestUrl, body, this.httpOptions)
      .pipe(
        tap(data => {
          console.log(data);
        }));
  }

  approveBucketObjectAccessRequest(body) {
    const approveAccessRequestUrl = environment.gatewayUrl + '/administrationserver/object/approveAccessRequest';
    return this.httpService.put<any>(approveAccessRequestUrl, body, this.httpOptions)
      .pipe(
        tap(data => {
          console.log(data);
        })
      );
  }

  rejectBucketObjectAccessRequest(body) {
    const rejectAccessRequestUrl = environment.gatewayUrl + '/administrationserver/object/rejectAccessRequest';
    return this.httpService.put<any>(rejectAccessRequestUrl, body, this.httpOptions)
      .pipe(
        tap(data => {
          console.log(data);
        })
      );
  }

  deleteBucketObjectAccessRequest(body) {
    const deleteAccessRequestUrl = environment.gatewayUrl + '/administrationserver/object/deleteAccessRequest';
    return this.httpService.request('delete', deleteAccessRequestUrl, {body})
      .pipe(
        tap(data => {
          console.log(data);
        })
      );
  }

  getUsers() {
    const getUserListUrl = environment.gatewayUrl + '/administrationserver/users';
    return this.httpService.get(getUserListUrl);
  }

  getUsersWithMetaData() {
    const getUserMetadataUrl = environment.gatewayUrl + '/administrationserver/usersMetadata';
    return this.httpService.get<UsersMetadata>(getUserMetadataUrl);
  }

  makeAdmin(body) {
    const makeAdminUrl = environment.gatewayUrl + '/administrationserver/makeAdmin';
    return this.httpService.post(makeAdminUrl, body)
      .pipe(
        tap(data => {
          console.log(data);
        })
      );
  }

  addUsers(body) {
    const addUserUrl = environment.gatewayUrl + '/administrationserver/bucket/addUser';
    return this.httpService.post<boolean>(addUserUrl, body)
      .pipe(
        tap(data => {
          console.log(data);
        })
      );
  }

  removeUser(body) {
    const removeUserUrl = environment.gatewayUrl + '/administrationserver/bucket/removeUser';
    return this.httpService.request('delete', removeUserUrl, {body})
      .pipe(
        tap(data => {
          console.log(data);
        })
      );
  }

  getBucketObjectAccessRequestsAsUser(userId) {
    const getBucketObjectAccessRequestsAsUserUrl = environment.gatewayUrl + '/administrationserver/accessRequestsCreatedByUser';
    const params = new HttpParams()
      .set('userId', userId);
    return this.httpService.get<BucketAccessRequestDto>(getBucketObjectAccessRequestsAsUserUrl, {params});
  }

  getBucketObjectAccessRequestsAsOwner(ownerId) {
    const getBucketObjectAccessRequestsAsOwnerUrl = environment.gatewayUrl + '/administrationserver/accessRequestsOfOwner';
    const params = new HttpParams()
      .set('ownerId', ownerId);
    return this.httpService.get<BucketAccessRequestDto>(getBucketObjectAccessRequestsAsOwnerUrl, {params});

  }

  getBucketAccessRequestsAdmin() {
    const getBucketAccessRequestsAdminUrl = environment.gatewayUrl + '/administrationserver/bucket/bucketAccessRequestsForAdmin';
    return this.httpService.get<BucketAccessRequestDto>(getBucketAccessRequestsAdminUrl);
  }

  approveBucketAccessRequestsAdmin(body) {
    console.log(body);
    const approveBucketAccessRequestsAdminUrl = environment.gatewayUrl + '/administrationserver/bucket/approveAccessRequest';
    return this.httpService.post<boolean>(approveBucketAccessRequestsAdminUrl, body)
      .pipe(
        tap(data => {
          console.log(data);
        })
      );
  }

  rejectBucketAccessRequestsAdmin(body) {
    console.log(body);
    const rejectBucketAccessRequestsAdminUrl = environment.gatewayUrl + '/administrationserver/bucket/rejectAccessRequest';
    return this.httpService.post<boolean>(rejectBucketAccessRequestsAdminUrl, body)
      .pipe(
        tap(data => {
          console.log(data);
        })
      );
  }

  deleteBucketAccessRequestsAdmin(body) {
    console.log(body);
    const deleteBucketAccessRequestsAdminUrl = environment.gatewayUrl + '/administrationserver/bucket/deleteAccessRequest';
    return this.httpService.request('delete', deleteBucketAccessRequestsAdminUrl, {body})
      .pipe(
        tap(data => {
          console.log(data);
        })
      );
  }

  getFilesAccessedByUserInBucket(ownerId, bucketName) {
    const getFilesAccessesByUserInBucketUrl = environment.gatewayUrl + '/administrationserver/listOfUsersAccessingOwnersObject';
    const params = new HttpParams()
      .set('ownerId', ownerId)
      .set('bucketName', bucketName);
    return this.httpService.get<any>(getFilesAccessesByUserInBucketUrl, {params});
  }

  getUsersFileAccessedByOthers(userId, bucketName) {
    const getUsersFileAccessedByOthersUrl = environment.gatewayUrl + '/administrationserver/userFiles';
    const params = new HttpParams()
      .set('userId', userId)
      .set('bucketName', bucketName);
    return this.httpService.get<any>(getUsersFileAccessedByOthersUrl, {params});
  }


}
