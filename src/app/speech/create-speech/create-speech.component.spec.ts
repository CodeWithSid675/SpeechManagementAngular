import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSpeachComponent } from './create-speach.component';

describe('CreateSpeachComponent', () => {
  let component: CreateSpeachComponent;
  let fixture: ComponentFixture<CreateSpeachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSpeachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSpeachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
