import { TestBed } from '@angular/core/testing';

import { LibrosSeviceService } from './libros.sevice.service';

describe('LibrosSeviceService', () => {
  let service: LibrosSeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibrosSeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
