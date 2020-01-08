import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSpeachComponent } from './view-speach.component';

describe('ViewSpeachComponent', () => {
  let component: ViewSpeachComponent;
  let fixture: ComponentFixture<ViewSpeachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSpeachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSpeachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
