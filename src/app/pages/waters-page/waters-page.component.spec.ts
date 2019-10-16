import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatersPageComponent } from './waters-page.component';

describe('WatersPageComponent', () => {
  let component: WatersPageComponent;
  let fixture: ComponentFixture<WatersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
