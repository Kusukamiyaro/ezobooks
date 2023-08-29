import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor(private http :HttpClient ) { }
  getItemsResponse(){
    return this.http.get('https://db.ezobooks.in/kappa/image/task');
  }
}
