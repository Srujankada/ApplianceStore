import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedComponent } from './shared.component';
import { StarComponent } from './star/star.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports : [
    CommonModule, 
    FormsModule,
    StarComponent
  ],
  declarations: [SharedComponent, StarComponent]
})
export class SharedModule { }
