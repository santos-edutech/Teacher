import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { CartService } from 'src/app/Services/cart-service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @ViewChildren("subTotalWrap") subTotalItems: QueryList<ElementRef>;
  @ViewChildren("subTotalWrap_existing") subTotalItems_existing: QueryList<ElementRef>;
  subTotalprice: any;
  subTotalAmount: any;

  constructor(
    public cartService: CartService, // private builder: FormBuilder
  ) { }

  items:any = [];

  //----- calculate total
 total() {
    return this.items?.reduce((sum:any, x:any) => ({
        qtyTotal: 1,
        variationCost: sum.variationCost + x.qtyTotal * x.variationCost,
      }),
      { qtyTotal: 1, variationCost: 0 },
    ).variationCost * 1.18;
  }
  
  changeSubtotal(item:any, index:any) {
    const qty = item.qtyTotal;
    const amt = item.variationCost;
    const subTotal = amt * qty;
    // const subTotal_converted = this.currencyPipe.transform(subTotal, "USD");

    // this.subTotalItems.toArray()[
    //   index
    // ].nativeElement.innerHTML = subTotal_converted;
    this.cartService.saveCart();
  }

  //----- remove specific item
  removeFromCart(item:any) {
    this.cartService.removeItem(item);
    this.items = this.cartService.getItems();
  }

  //----- clear cart item
  clearCart(items:any) {
    // this.items.forEach((item, index) => this.cartService.removeItem(index));
    this.cartService.clearCart(items);
    this.items = [...this.cartService.getItems()];
  }

  totalAmount:any;

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.items =this.cartService.loadCart();
    this.totalAmount = this.total();
    localStorage.setItem('cart_amount',this.totalAmount);
  }

}
