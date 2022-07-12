import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CallapisService {
  baseurl = '../../assets/menu/menu.json';
  public allrecipes = new BehaviorSubject<{}>({});
  recipes;
  constructor(private http: HttpClient) {
    this.http.get(this.baseurl).subscribe((res:any) => {
      this.allrecipes.next(res);
    })
    this.allrecipes.subscribe(res => {
      this.recipes = res;
    })
  }

  get getAllRecipe() {
    return this.allrecipes.asObservable();
  }

  getItemByName(type, name):Observable<any> {
    return this.allrecipes.pipe(map(res => res[type].find(filtered => filtered.name === name)))
  }


  updateRecipe(type, recipename, data) {
    let index = this.recipes[type].findIndex((o: any) => o.name === recipename);
    if (index > -1) {
      this.recipes[type][index] = data;
    }
  }


}
