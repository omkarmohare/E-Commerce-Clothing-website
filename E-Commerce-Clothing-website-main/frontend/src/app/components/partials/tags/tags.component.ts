import { Component, OnInit } from '@angular/core';
import { RetailService } from 'src/app/services/item.service';
import { Tag } from 'src/app/shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags?:Tag[];
  constructor(itemService:RetailService) {
    itemService.getAllTags().subscribe(serverTags => {
      this.tags = serverTags;
    });
   }

  ngOnInit(): void {
  }

}