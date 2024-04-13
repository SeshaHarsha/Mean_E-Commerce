import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

const materialComponents: any = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatBadgeModule
];
@NgModule({
  declarations: [],
  imports: [materialComponents],
  exports: [materialComponents],
})
export class AngularMaterialModule {}
