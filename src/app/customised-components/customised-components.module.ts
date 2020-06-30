import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminComponent} from './admin/admin.component';
import {SideNavBarComponent} from './side-nav-bar/side-nav-bar.component';
import {MenuBarComponent} from './menu-bar/menu-bar.component';
import {DialogBoxComponent} from './dialog-box/dialog-box.component';
import {CollapsableCardComponent} from './collapsable-card/collapsable-card.component';
import {FlowerChartComponent} from './flower-chart/flower-chart.component';
import {FileTreeListComponent} from './file-tree-list/file-tree-list.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {OwnerTreeComponent} from './owner-tree/owner-tree.component';
import {UserTreeComponent} from './user-tree/user-tree.component';
import {EmailToUsernamePipePipe} from './menu-bar/email-to-username-pipe.pipe';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSortModule} from '@angular/material/sort';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  declarations: [
    AdminComponent,
    SideNavBarComponent,
    MenuBarComponent,
    DialogBoxComponent,
    CollapsableCardComponent,
    FlowerChartComponent,
    FileTreeListComponent,
    OwnerTreeComponent,
    UserTreeComponent,
    EmailToUsernamePipePipe
  ],
  exports: [
    AdminComponent,
    SideNavBarComponent,
    MenuBarComponent,
    DialogBoxComponent,
    CollapsableCardComponent,
    FlowerChartComponent,
    FileTreeListComponent,
    FontAwesomeModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    OwnerTreeComponent,
    UserTreeComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    FontAwesomeModule,
    MatPaginatorModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    RouterModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDialogModule,
    MatSortModule,
    MatIconModule,
    MatTooltipModule
  ]
})
export class CustomisedComponentsModule {
}
