import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GiftElementComponent } from './gift-element.component';

describe('GiftElementComponent', () => {
  let component: GiftElementComponent;
  let fixture: ComponentFixture<GiftElementComponent>;

  beforeEach(waitForAsync(() => {
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
