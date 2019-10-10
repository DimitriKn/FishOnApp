import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoughtPageComponent } from './cought-page.component';

describe('CoughtPageComponent', () => {
  let component: CoughtPageComponent;
  let fixture: ComponentFixture<CoughtPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoughtPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoughtPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
