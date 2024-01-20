import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { MatCardModule } from '@angular/material/card';
import { FlexModule } from '@angular/flex-layout';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [ProductListComponent],
  imports: [
    FlexModule,
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
  ],
})
export class ProductModule {}
