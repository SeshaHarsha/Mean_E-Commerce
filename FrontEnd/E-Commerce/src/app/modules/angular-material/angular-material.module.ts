import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

const materialComponents: any = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatBadgeModule,
  MatGridListModule,
  MatTabsModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBarModule,
  MatMenuModule,
  MatListModule,
  MatSidenavModule,
  MatExpansionModule,
  MatTooltipModule,
  MatPaginatorModule,
  MatSelectModule,
  MatProgressSpinnerModule
];
@NgModule({
  declarations: [],
  imports: [materialComponents],
  exports: [materialComponents],
})
export class AngularMaterialModule {}
