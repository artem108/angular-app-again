/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ListPageService } from './list-page.service';

describe('ListPageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListPageService]
    });
  });

  it('should ...', inject([ListPageService], (service: ListPageService) => {
    expect(service).toBeTruthy();
  }));
});
