import { Injectable } from "@angular/core";
import { Categories } from "../../interfaces/categories.interface";
import { News } from "../../interfaces/news.interface";

@Injectable({
    providedIn: 'root',
  })
  export class ListRegularNewsService {
    private _listNews: News[] = [
      {
        author: "none",
        categorie: Categories.Deportes,
        date: "20/03/2021",
        name: "Bastian",
        picture: "https://www.nationalgeographic.com.es/medio/2020/09/21/rinoceronte-blanco-resistencia-atemporal-en-el-corazon-de-africa_4402fec0_1200x630.jpg",
        body: "texto defwfwefwefwefwefw"
      },
      {
        author: "none",
        categorie: Categories.Deportes,
        date: "20/03/2021",
        name: "Bastian",
        picture: "https://www.nationalgeographic.com.es/medio/2020/09/21/rinoceronte-blanco-resistencia-atemporal-en-el-corazon-de-africa_4402fec0_1200x630.jpg",
        body: "texto defwfwefwefwefwefw"
      },
      {
        author: "none",
        categorie: Categories.Deportes,
        date: "20/03/2021",
        name: "Bastian",
        picture: "https://www.nationalgeographic.com.es/medio/2020/09/21/rinoceronte-blanco-resistencia-atemporal-en-el-corazon-de-africa_4402fec0_1200x630.jpg",
        body: "texto defwfwefwefwefwefw"
      },
      {
        author: "none",
        categorie: Categories.Deportes,
        date: "20/03/2021",
        name: "Bastian",
        picture: "https://www.nationalgeographic.com.es/medio/2020/09/21/rinoceronte-blanco-resistencia-atemporal-en-el-corazon-de-africa_4402fec0_1200x630.jpg",
        body: "texto defwfwefwefwefwefw"
      },
    ];
    get listRegularNews():News[] {
      return [...this._listNews];
    }
  }