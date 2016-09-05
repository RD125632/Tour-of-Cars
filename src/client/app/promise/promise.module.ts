import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PromiseComponent } from './promise.component';
import { NameListService } from '../shared/name-list/index';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [PromiseComponent],
  exports: [PromiseComponent],
  providers: [NameListService]
})
export class PromiseModule { }
