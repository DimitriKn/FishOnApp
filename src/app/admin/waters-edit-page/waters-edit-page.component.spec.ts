import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatersEditPageComponent } from './waters-edit-page.component';

describe('WatersEditPageComponent', () => {
  let component: WatersEditPageComponent;
  let fixture: ComponentFixture<WatersEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatersEditPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatersEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
