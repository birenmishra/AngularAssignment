import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeExtractComponent } from './node-extract.component';

describe('NodeExtractComponent', () => {
  let component: NodeExtractComponent;
  let fixture: ComponentFixture<NodeExtractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodeExtractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeExtractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
