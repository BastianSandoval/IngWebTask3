import { Component, OnInit } from '@angular/core';
import { News } from '../interfaces/news.interface';
import { ListBestNewsService } from './services/list-best-news.service';

@Component({
  selector: 'app-best-news',
  templateUrl: './best-news.component.html',
  styleUrls: ['./best-news.component.sass']
})
export class BestNewsComponent implements OnInit {

  constructor(private bestNews:ListBestNewsService) { }

  get list():News[] {
    return this.bestNews.listNews;
  }

  ngOnInit(): void {
  }

}
