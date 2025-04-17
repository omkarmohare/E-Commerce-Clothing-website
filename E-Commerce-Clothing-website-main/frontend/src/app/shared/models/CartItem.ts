import { Retail } from "./Retail";

export class CartItem{
  id: string | undefined;
  constructor(public item:Retail){ }
  quantity:number = 1 ;
  price: number = this.item.price;
}