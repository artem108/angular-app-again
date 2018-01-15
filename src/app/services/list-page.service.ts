import { Injectable } from '@angular/core';

@Injectable()
export class ListPageService {

  constructor(private httpService: _HttpService) { }

  public getListAny(route) {
    return this.httpService.get(environment.anyList);
  }
}
