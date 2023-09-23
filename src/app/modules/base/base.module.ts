import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/shared/material/material.module';

import { BaseRoutingModule } from './base-routing.module';
import { BaseComponent } from './base.component';

@NgModule({
  declarations: [BaseComponent],
  exports: [BaseComponent],
  imports: [CommonModule, BaseRoutingModule, MaterialModule],
})
export class BaseModule {}
