import { Injectable } from '@angular/core';
import { Categories } from '../../interfaces/categories.interface';
import { News } from '../../interfaces/news.interface';

const textMin: string =
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
const text: string =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
@Injectable({
  providedIn: 'root',
})
export class ListBestNewsService {
  private _listNews: News[] = [
    {
      author: 'none',
      categorie: Categories.Deportes,
      date: '20/03/2021',
      name: 'Bastian',
      picture:
        'http://www.google.com/logos/doodles/2021/doodle-champion-island-games-begin-6753651837108462.2-2xa.gif',
      body: text,
      bodyMin: textMin,
    },
    {
      author: 'none',
      categorie: Categories.Deportes,
      date: '20/03/2021',
      name: 'Bastian',
      picture:
        'https://www.nationalgeographic.com.es/medio/2020/09/21/rinoceronte-blanco-resistencia-atemporal-en-el-corazon-de-africa_4402fec0_1200x630.jpg',
      body: text,
      bodyMin: textMin,
    },
    {
      author: 'none',
      categorie: Categories.Deportes,
      date: '20/03/2021',
      name: 'Bastian',
      picture:
        'https://www.latino-news.com/wp-content/uploads/2019/01/tecnologia.png',
      body: text,
      bodyMin: textMin,
    },
  ];
  get listNews(): News[] {
    return [...this._listNews];
  }
}
