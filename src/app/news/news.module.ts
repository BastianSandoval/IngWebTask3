import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsComponent } from './news.component';
import { RegularNewsComponent } from './regular-news/regular-news.component';
import { BestNewsComponent } from './best-news/best-news.component';


@NgModule({
  declarations: [
    NewsComponent,
    RegularNewsComponent,
    BestNewsComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    NewsComponent,
  ],
})
export class NewsModule { }
