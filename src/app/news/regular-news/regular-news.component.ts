import { Component, OnInit } from '@angular/core';
import { News } from '../interfaces/news.interface';
import { ListRegularNewsService } from './services/list-regular-news.service';

@Component({
  selector: 'app-regular-news',
  templateUrl: './regular-news.component.html',
  styleUrls: ['./regular-news.component.sass']
})
export class RegularNewsComponent implements OnInit {

  constructor(private regularNews:ListRegularNewsService) { }

  get listRegularNews():News[] {
    return [...this.regularNews.listRegularNews];
  }

  ngOnInit(): void {
  }

}