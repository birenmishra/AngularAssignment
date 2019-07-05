import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountCharacterComponent } from './count-character.component';

describe('CountCharacterComponent', () => {
  let component: CountCharacterComponent;
  let fixture: ComponentFixture<CountCharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountCharacterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
