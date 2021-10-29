import { Categories } from "./categories.interface";

export interface News {
    name: string; 
    picture: string;
    categorie: Categories;
    author: string;
    body: string;
    date: string;
}
