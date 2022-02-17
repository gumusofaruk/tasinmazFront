import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';
import { Tasinmaz } from '../models/tasinmaz';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  
  addToCart(tasinmaz:Tasinmaz){
    let item=CartItems.find(c=>c.tasinmaz.tasinmazId===tasinmaz.tasinmazId);
    if(item){
      item.quantity+=1;
    }
    else{
      let cartItem=new CartItem();
      cartItem.tasinmaz=tasinmaz;
      cartItem.quantity=1;
      CartItems.push(cartItem)
    }
  }
  removeFromCart(tasinmaz:Tasinmaz){
    let item:CartItem=CartItems.find(c=>c.tasinmaz.tasinmazId===tasinmaz.tasinmazId);
    CartItems.splice(CartItems.indexOf(item),1);
    
  }
  list():CartItem[]{
    return CartItems;
  }
}
