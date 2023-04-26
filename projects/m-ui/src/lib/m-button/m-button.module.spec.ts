import { TestBed } from '@angular/core/testing';

import { MButtonModule } from './m-button.module';

describe('MButtonModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MButtonModule],
    });
  });

  it('initializes', () => {
    const module: MButtonModule = TestBed.inject(MButtonModule);
    expect(module).toBeTruthy();
  });
});
