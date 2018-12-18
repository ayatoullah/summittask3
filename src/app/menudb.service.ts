
import { Injectable } from '@angular/core';
import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';

import {Observable} from 'rxjs/Observable'
import {IMenu} from 'src/menu'
import { HttpClient } from '@angular/Common/Http';

@Injectable({
  providedIn: 'root'
})
export class MenudbService {

  
  /* http client */
private _url:string='/assets/data/menu.json'

constructor(private http:HttpClient) { }
getAll():Observable<IMenu[]>{
  return this.http.get<IMenu[]>(this._url)
  
}
}
