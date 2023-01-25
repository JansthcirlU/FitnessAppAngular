import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DatabaseService } from './database/database.service';

@NgModule({
  declarations: [],
  providers: [
    DatabaseService
  ],
  imports: [
    CommonModule,
    HttpClientInMemoryWebApiModule.forFeature(
      DatabaseService, { dataEncapsulation: false }
    ),
  ],
  exports: [
    HttpClientInMemoryWebApiModule
  ]
})
export class MockDataModule { }
