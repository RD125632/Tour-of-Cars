import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PromiseComponent } from './promise.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [PromiseComponent],
  exports: [PromiseComponent]
})
export class PromiseModule { }
