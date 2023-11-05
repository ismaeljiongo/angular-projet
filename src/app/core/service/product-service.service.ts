import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }
  public getProduct(): Product[] {
    return [
      new Product(1,"Savon Noir","Permet de Guerrir les Boutons",3000,20),
      new Product(2,"Laits eclaississan","Pour adoucit la peau",6000,20),
      new Product(3,"pate d'antifrice","ermet de Guerrir les Dents",4000,10),
      new Product(4,"creme a main","Permet de rendre une peaux douce",3000,30)
    ];
  }
}
