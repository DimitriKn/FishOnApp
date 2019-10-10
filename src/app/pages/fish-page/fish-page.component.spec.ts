import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishPageComponent } from './fish-page.component';

describe('FishPageComponent', () => {
  let component: FishPageComponent;
  let fixture: ComponentFixture<FishPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FishPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
