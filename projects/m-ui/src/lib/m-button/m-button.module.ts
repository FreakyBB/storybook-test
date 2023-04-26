import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MButtonComponent } from './m-button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MButtonComponent],
  exports: [MButtonComponent],
})
export class MButtonModule {}
