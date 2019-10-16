import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatersPostPageComponent } from './waters-post-page.component';

describe('WatersPostPageComponent', () => {
  let component: WatersPostPageComponent;
  let fixture: ComponentFixture<WatersPostPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatersPostPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatersPostPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
