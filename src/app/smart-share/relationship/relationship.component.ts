import {Component, OnInit} from '@angular/core';
import {AdminServerService} from '../service/admin-server.service';
import {Auth0ServiceService} from '../../authentication/auth0/auth0-service.service';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-relationship',
  templateUrl: './relationship.component.html',
  styleUrls: ['./relationship.component.less']
})
export class RelationshipComponent implements OnInit {
  perspective;
  perspectiveLabel;
  ownerData;
  userData;

  private selectedBucket: string;


  constructor(private adminService: AdminServerService,
              private oauth: Auth0ServiceService,
              private toaster: ToastrService) {
  }

  ngOnInit() {
    this.perspective = false;
    this.perspectiveLabel = 'User';
    this.selectedBucket = 'Choose Bucket';
  }

  filterBuckets(selectedBucket: string) {

    if (selectedBucket === 'Choose Bucket') {
      this.toaster.warning('Please Select Bucket');
    } else {
      this.selectedBucket = selectedBucket.toLowerCase();
      this.adminService.getUsersFileAccessedByOthers(this.oauth.getUserId(), this.selectedBucket).subscribe(value => {
        this.userData = value;
      });
    }
  }

  changePerspective() {
    if (this.perspective === true) {
      this.perspectiveLabel = 'Owner';
      if (this.selectedBucket === 'Choose Bucket') {
        this.toaster.warning('Please Select Bucket');
      } else {
        this.adminService.getFilesAccessedByUserInBucket(this.oauth.getUserId(), this.selectedBucket).subscribe(value => {
          this.ownerData = value;
        });
      }
    } else {
      this.perspectiveLabel = 'User';
      if (this.selectedBucket === 'Choose Bucket') {
        this.toaster.warning('Please Select Bucket');
      } else {
        this.adminService.getUsersFileAccessedByOthers(this.oauth.getUserId(), this.selectedBucket).subscribe(value => {
          this.userData = value;
        });
      }
    }
  }


}
