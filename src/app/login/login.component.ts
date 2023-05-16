import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  constructor(private seller:SellerService){}

  signUp(data: object): void {
    console.warn(data);
    this.seller.sellerSignUp();
  }
}
