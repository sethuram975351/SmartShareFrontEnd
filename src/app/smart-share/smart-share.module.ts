import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomisedComponentsModule} from '../customised-components/customised-components.module';
import {RouterModule} from '@angular/router';
import {BucketListComponent} from './bucket-list/bucket-list.component';
import {BucketComponent} from './bucket/bucket.component';
import {DashBoardComponent} from './dash-board/dash-board.component';
import {AddUsersComponent} from './add-users/add-users.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {UsersListComponent} from './users-list/users-list.component';
import {UserComponent} from './user/user.component';
import {AdministrationComponent} from './administration/administration.component';
import {BucketManagementComponent} from './administration/bucket-management/bucket-management.component';
import {FileAndFolderManagementComponent} from './administration/file-and-folder-management/file-and-folder-management.component';
import {FileExplorerComponent} from './file-explorer/file-explorer.component';
import {DialogBoxComponent} from '../customised-components/dialog-box/dialog-box.component';
import {ToastrModule} from 'ngx-toastr';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptorService} from '../authentication/auth-interceptor.service';
import {RelationshipComponent} from './relationship/relationship.component';
import {BucketResolver} from './bucket-list/bucket-resolver.service';
import {BucketObjectResolver} from './file-explorer/bucket-object-resolver.service';
import {NgxSpinnerModule} from 'ngx-spinner';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthGuardService} from '../authentication/auth-guard.service';
import {CreateBucketDialogComponent} from './file-explorer/create-bucket-dialog/create-bucket-dialog.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRippleModule} from '@angular/material/core';


@NgModule({
  declarations: [
    BucketListComponent,
    BucketComponent,
    DashBoardComponent,
    AddUsersComponent,
    UsersListComponent,
    UserComponent,
    AdministrationComponent,
    BucketManagementComponent,
    FileAndFolderManagementComponent,
    FileExplorerComponent,
    RelationshipComponent,
    CreateBucketDialogComponent],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}
  ],
  imports: [
    CommonModule,
    CustomisedComponentsModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: 'dashboard',
        component: DashBoardComponent,
        children: [
          {path: '', redirectTo: 'buckets', pathMatch: 'full', canActivate: [AuthGuardService]},
          {
            path: 'buckets', component: BucketListComponent,
            resolve: {buckets: BucketResolver}, canActivate: [AuthGuardService]
          },
          {
            path: 'addUsers',
            component: AddUsersComponent,
            data: {bucketName: ''},
            canActivate: [AuthGuardService]
          },
          {path: 'users', component: UsersListComponent, canActivate: [AuthGuardService]},
          {
            path: 'explorer',
            component: FileExplorerComponent,
            // data: {bucketName: ''},
            resolve: {bucketObjects: BucketObjectResolver},
            canActivate: [AuthGuardService]
          },
          {
            path: 'relationships',
            component: RelationshipComponent,
            canActivate: [AuthGuardService]
          },
          {
            path: 'administration',
            component: AdministrationComponent,
            canActivate: [AuthGuardService],
            children: [
              {path: '', redirectTo: 'bucket', pathMatch: 'full'},
              {path: 'bucket', component: BucketManagementComponent, data: {filter: ''}, canActivate: [AuthGuardService]},
              {path: 'filesOrFolders', component: FileAndFolderManagementComponent, canActivate: [AuthGuardService]}
            ]
          }
        ]
      }
    ]),
    DragDropModule,
    MatTooltipModule,
    MatExpansionModule,
    MatDividerModule,
    MatTabsModule,
    MatListModule,
    MatSlideToggleModule,
    MatDialogModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatButtonToggleModule,
    MatIconModule,
    MatSelectModule,
    MatRippleModule,
    MatRadioModule,
    MatCheckboxModule
  ],
  entryComponents: [DialogBoxComponent, CreateBucketDialogComponent]
})
export class SmartShareModule {
  // constructor(library: FaIconLibrary) {
  //   library.addIconPacks(fas);
  //   library.addIcons(faSearch, faBurn, faBitbucket, faUsers, faTrashAlt, faTimes,
  //     faPlus, faUser, faUserCog, faFileArchive, faEye, faWpexplorer, faFolderPlus, faCloudDownloadAlt, faCloudUploadAlt, faFileAlt,
  //     faUserTie, faUserSecret, faUserEdit);
  // }
}
