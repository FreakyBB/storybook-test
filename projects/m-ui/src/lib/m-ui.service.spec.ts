import { TestBed } from '@angular/core/testing';

import { MUiService } from './m-ui.service';

describe('MUiService', () => {
  let service: MUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
