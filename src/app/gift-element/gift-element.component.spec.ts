import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftElementComponent } from './gift-element.component';

describe('GiftElementComponent', () => {
  let component: GiftElementComponent;
  let fixture: ComponentFixture<GiftElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
