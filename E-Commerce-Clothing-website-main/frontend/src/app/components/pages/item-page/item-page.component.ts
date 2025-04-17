import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { RetailService } from 'src/app/services/item.service';
import { Retail } from 'src/app/shared/models/Retail';
@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class RetailPageComponent implements OnInit {
  item!: Retail;
  constructor(activatedRoute:ActivatedRoute, itemService:RetailService,
    private cartService:CartService, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if(params.id)
      itemService.getRetailById(params.id).subscribe(serverRetail => {
        this.item = serverRetail;
      });
    })
   }

  ngOnInit(): void {
  }
  addToCart(){
    this.cartService.addToCart(this.item);
    this.router.navigateByUrl('/cart-page');
  }
}