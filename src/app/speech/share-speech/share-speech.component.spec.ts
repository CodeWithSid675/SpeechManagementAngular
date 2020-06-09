import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSpeachComponent } from './search-speach.component';

describe('SearchSpeachComponent', () => {
  let component: SearchSpeachComponent;
  let fixture: ComponentFixture<SearchSpeachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSpeachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSpeachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
