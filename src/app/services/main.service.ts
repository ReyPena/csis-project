import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MainService {
  constructor(private _http: HttpClient) {}

  public async getPlatData(): Promise<void> {
    debugger
    const result = this._http.get('https://pacific-harbor-11772.herokuapp.com/api/points');
    console.log(result)
  }
}
