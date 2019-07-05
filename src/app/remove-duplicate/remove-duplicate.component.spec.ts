import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveDuplicateComponent } from './remove-duplicate.component';

describe('RemoveDuplicateComponent', () => {
  let component: RemoveDuplicateComponent;
  let fixture: ComponentFixture<RemoveDuplicateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveDuplicateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveDuplicateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
