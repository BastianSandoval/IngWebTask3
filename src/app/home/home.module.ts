import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NewsModule } from '../news/news.module';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NewsModule,
  ]
})
export class HomeModule { }
