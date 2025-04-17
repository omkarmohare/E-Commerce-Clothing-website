import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { sample_items , sample_tags } from 'src/data';
import { RETAILS_BY_SEARCH_URL, RETAILS_BY_TAG_URL, RETAILS_TAGS_URL, RETAILS_URL, RETAILS_BY_ID_URL } from '../shared/constants/url';
import { Retail } from '../shared/models/Retail';

import { Tag } from '../shared/models/Tag';
@Injectable({
  providedIn: 'root'
})
export class RetailService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Retail[]> {
    return this.http.get<Retail[]>(RETAILS_URL);
  }

  getAllRetailsBySearchTerm(searchTerm: string) {
    return this.http.get<Retail[]>(RETAILS_BY_SEARCH_URL + searchTerm);
  }

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(RETAILS_TAGS_URL);
  }

  getAllRetailsByTag(tag: string): Observable<Retail[]> {
    return tag === "All" ?
      this.getAll() :
      this.http.get<Retail[]>(RETAILS_BY_TAG_URL + tag);
  }

  getRetailById(itemId:string):Observable<Retail>{
    return this.http.get<Retail>(RETAILS_BY_ID_URL + itemId);
  }

}