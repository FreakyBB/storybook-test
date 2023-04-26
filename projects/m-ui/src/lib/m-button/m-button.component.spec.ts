import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MButtonComponent } from './m-button.component';
import { MButtonModule } from './m-button.module';

describe('MButtonComponent', () => {
  let component: MButtonComponent;
  let fixture: ComponentFixture<MButtonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MButtonModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
