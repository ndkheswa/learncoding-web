import { NgModule } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CdkTableModule } from '@angular/cdk/table';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';

const modules: any[] = [
  MatButtonModule,
  MatCardModule,
  MatTableModule,
  MatToolbarModule,
  CdkTableModule,
  MatListModule,
  MatSidenavModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTabsModule,
  MatIconModule,
  MatInputModule,
  MatPaginatorModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatSelectModule
];

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules]
})
export class MaterialModule { }
