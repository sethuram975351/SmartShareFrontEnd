import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {Observable, Subscription} from 'rxjs';
import * as FileSaver from 'file-saver';
import {environment} from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FileServerService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpService: HttpClient) {
  }

  getBucketList(userId) {
    const getBucketListUrl = environment.gatewayUrl + '/coreserver/buckets';
    const params = new HttpParams()
      .set('userId', userId);
    return this.httpService.get(getBucketListUrl, {params});
  }

  createBucket(body): Observable<any> {

    const createBucketUrl = environment.gatewayUrl + '/coreserver/bucket';
    return this.httpService.post<any>(createBucketUrl, body, this.httpOptions)
      .pipe(
        tap(data => {
          console.log(data);
        })
      );
  }

  deleteBucket(bucketName) {
    const deleteBucketUrl = environment.gatewayUrl + '/coreserver/bucket';
    const params = new HttpParams()
      .set('bucketName', bucketName);
    return this.httpService.delete(deleteBucketUrl, {params});
  }

  getBucketObjects(userId, bucketName) {
    const getBucketListUrl = environment.gatewayUrl + '/coreserver/objects';
    const params = new HttpParams()
      .set('userId', userId)
      .set('bucketName', bucketName);
    return this.httpService.get(getBucketListUrl, {params});
  }

  downloadFile(fileName, objectName, bucketName): Subscription {

    const downloadFileUrl = environment.gatewayUrl + '/coreserver/file/download';
    const params = new HttpParams()
      .set('fileName', fileName)
      .set('objectName', objectName)
      .set('bucketName', bucketName);
    const headers = new HttpHeaders({
      Return: 'resource'
    });
    return this.httpService.get(downloadFileUrl, {headers, params, responseType: 'blob'})
      .subscribe(
        (response) => {
          //
          FileSaver.saveAs(response, fileName);
        });
  }

  downloadFolder(objectsToDownload): Observable<any> {

    const downloadFolderUrl = environment.gatewayUrl + '/coreserver/folder/download';
    return this.httpService.post<any>(downloadFolderUrl, objectsToDownload, this.httpOptions);
  }

  uploadFile(body): Observable<any> {

    const uploadUrl = environment.gatewayUrl + '/coreserver/object';
    return this.httpService.post<any>(uploadUrl, body, this.httpOptions)
      .pipe(
        tap(data => {
          console.log(data);
        })
      );
  }

  deleteFile(objectName, bucketName, ownerId): Observable<any> {

    const deleteFileUrl = environment.gatewayUrl + '/coreserver/file';
    const params = new HttpParams()
      .set('objectName', objectName)
      .set('bucketName', bucketName)
      .set('ownerId', ownerId);
    return this.httpService.delete(deleteFileUrl, {params});
  }

  deleteFolder(deleteObjectsRequest) {
    const deleteFolderUrl = environment.gatewayUrl + '/coreserver/folder';
    return this.httpService.request('delete', deleteFolderUrl, {body: deleteObjectsRequest});
  }

  createNewFolder(body) {
    const newFolderUrl = environment.gatewayUrl + '/coreserver/folder/empty';
    return this.httpService.post<any>(newFolderUrl, body, this.httpOptions)
      .pipe(
        tap(data => {
          console.log(data);
        })
      );
  }


}
