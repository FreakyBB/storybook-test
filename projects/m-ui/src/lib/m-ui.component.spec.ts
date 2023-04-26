import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MUiComponent } from './m-ui.component';

describe('MUiComponent', () => {
  let component: MUiComponent;
  let fixture: ComponentFixture<MUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
