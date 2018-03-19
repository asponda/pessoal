import { TestBed, inject } from '@angular/core/testing';

import { MenuService } from './menu.service';

describe('MenuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MenuService]
    });
  });

  it('should be created', inject([MenuService], (service: MenuService) => {
    expect(service).toBeTruthy();
  }));

  it('should have menu itens'), inject([MenuService], (service: MenuService) => {
    const itens = service.getMenuItens();
    expect(itens).toBeDefined();
  });
});
