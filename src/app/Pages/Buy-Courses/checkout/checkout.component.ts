import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore , AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { CartService } from 'src/app/Services/cart-service/cart.service';
import { Router } from '@angular/router';

declare var Razorpay: any;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  message:any = "Not yet stared";
  paymentId = "";
  error = "";
  paymentForm:any = FormGroup;
  paymentFormData : AngularFirestoreCollection<any>;
  cartItem:any ;
  buyCourseName: any;
  productItems:any;
  payAmount:any;

  constructor(
    public fb: FormBuilder,
    private db: AngularFirestore,
    public cartService: CartService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.paymentForm = this.fb.group({
      name:['', [Validators.required]],
      email:['', [Validators.required]],
      mobile:['', [Validators.required]],
      country:['', [Validators.required]],
      state:['', [Validators.required]],
      pincode:['', [Validators.required]],
      address:['', [Validators.required]],
    });
    this.paymentFormData = this.db.collection('paymentForm');
    this.cartItem = this.cartService.loadCart();
    this.productItems = JSON.stringify(this.cartItem);
    this.payAmount = localStorage.getItem('cart_amount');
    // console.log(this.payAmount);
  }

  options = {
    "key": "rzp_live_mA0fuReEwPBetc",
    "amount":'',
    "name": "EDUTECHEX",
    "description": "",
    "image": "",
    "order_id": "",
    "handler": function (response: any) {
      var event = new CustomEvent("payment.success",
        {
          detail: response,
          bubbles: true,
          cancelable: true
        }
      );
      window.dispatchEvent(event);
    },
    "prefill": {
      "name": "",
      "email": "",
      "contact": "",
    },
    "notes": {
      "address": "",
      "items":"",
    },
    "theme": {
      "color": "#313d9c"
    }
  };

  paynow() {
    this.buyCourseName =[];
    let parsed = JSON.parse(this.productItems);
    for (let i = 0; i < parsed.length; i++) {
        this.buyCourseName.push(parsed[i].menuName);
        this.options.notes.items=JSON.stringify(this.buyCourseName);
        // console.log(this.options.notes.items);
    }
    this.paymentFormData.add(this.paymentForm.value).then(res =>{
      // console.log(res);
    });
    this.paymentId = '';
    this.error = '';
    this.options.amount = this.payAmount+'00'; //paise
    this.options.prefill.email = this.paymentForm.value['email'];
    this.options.prefill.contact = this.paymentForm.value['mobile'];
    var rzp1 = new Razorpay(this.options);
    rzp1.open();
    rzp1.on('payment.failed', function (response: any) {
      //this.message = "Payment Failed";
      // Todo - store this information in the server
      // console.log(response.error.code);
      // console.log(response.error.description);
      // console.log(response.error.source);
      // console.log(response.error.step);
      // console.log(response.error.reason);
      // console.log(response.error.metadata.order_id);
      // console.log(response.error.metadata.payment_id);
      //this.error = response.error.reason;
    }
    );
  }
  @HostListener('window:payment.success', ['$event'])
  onPaymentSuccess(event: any): void {
    this.message = "Success Payment";
    this.paymentForm.reset();
    this.router.navigate(['/thankyou']);
    localStorage.removeItem('cart_items');
    localStorage.removeItem('cart_amount');
  }

}
