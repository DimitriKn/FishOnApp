import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatersCreatePageComponent } from './waters-create-page.component';

describe('WatersCreatePageComponent', () => {
  let component: WatersCreatePageComponent;
  let fixture: ComponentFixture<WatersCreatePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatersCreatePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatersCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
