import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private _http: HttpClient) { }

  getQuery(query: string, type: string, body?: any) {
    const url = environment.url + query;
    let headers: any = new HttpHeaders({ Accept: "application/json" });
    if (type == "get") {
      return this._http.get(url, { params: body, headers: headers });
    } else if (type == "post") {
      return this._http.post(url, body, { headers: headers });
    } else if (type == "delete") {
      let httpOptions = { headers: headers, body: body };
      return this._http.delete(url, httpOptions);
    } else {
      return this._http.put(url, body, { headers: headers });
    }
  }

}
