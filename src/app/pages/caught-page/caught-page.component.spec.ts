import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaughtPageComponent } from './caught-page.component';

describe('CoughtPageComponent', () => {
  let component: CaughtPageComponent;
  let fixture: ComponentFixture<CaughtPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaughtPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaughtPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
