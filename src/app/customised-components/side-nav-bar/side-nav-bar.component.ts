import {Component, OnInit} from '@angular/core';
import {Auth0ServiceService} from '../../authentication/auth0/auth0-service.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {faFire} from '@fortawesome/free-solid-svg-icons/faFire';
import {faUsers} from '@fortawesome/free-solid-svg-icons/faUsers';
import {faFileArchive, faProjectDiagram, faUserCog} from '@fortawesome/free-solid-svg-icons';
import {faWpexplorer} from '@fortawesome/free-brands-svg-icons';
import {faBitbucket} from '@fortawesome/free-brands-svg-icons/faBitbucket';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.less']
})
export class SideNavBarComponent implements OnInit {

  isLoggedIn = false;
  isAdmin: boolean;
  auth: Auth0ServiceService;
  faFire = faFire;
  faUsers = faUsers;
  faUserCog = faUserCog;
  faBitbucket = faBitbucket;
  faFileArchive = faFileArchive;
  faWpexplorer = faWpexplorer;
  faProjectDiagram = faProjectDiagram;


  constructor(private router: Router,
              auth: Auth0ServiceService,
              private toaster: ToastrService
  ) {
    this.auth = auth;
    this.auth.loginChanged.subscribe(value => {
      this.isLoggedIn = value;
      this.auth.registerUser();
    });
    this.auth.isAdminAssigned.subscribe(value => {
      this.isAdmin = value;
    });
  }

  opened = true;
  routeOutletComponentReference;

  onActivate(componentReference) {
    this.routeOutletComponentReference = componentReference;
  }

  filterBuckets(bucketFilter: string) {
    this.routeOutletComponentReference.filterBuckets(bucketFilter);
  }

  ngOnInit(): void {
    this.isAdmin = this.auth.getAdminStatus();

    this.auth.isDefaultAdminAssigned.subscribe(value => {
      this.toaster.info('Please make yourself Admin !', 'Initial Setup');
    });
  }
}
