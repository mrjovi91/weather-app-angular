import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { FormsModule } from '@angular/forms';
import { SelectionTableComponent } from './selection-table/selection-table.component';

@NgModule({
  declarations: [SearchbarComponent, SelectionTableComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[
    SearchbarComponent,
    SelectionTableComponent
  ]
})
export class SharedModule { }
