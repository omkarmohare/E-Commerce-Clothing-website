import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { RetailService } from 'src/app/services/item.service';
import { Retail } from 'src/app/shared/models/Retail';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items: Retail[] = [];
  constructor(private itemService: RetailService, activatedRoute: ActivatedRoute) {
    let itemsObservalbe:Observable<Retail[]>;
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        itemsObservalbe = this.itemService.getAllRetailsBySearchTerm(params.searchTerm);
      else if (params.tag)
        itemsObservalbe = this.itemService.getAllRetailsByTag(params.tag);
      else
        itemsObservalbe = itemService.getAll();

        itemsObservalbe.subscribe((serverRetails) => {
          this.items = serverRetails;
        })
    })
  }

  ngOnInit(): void {
  }
}