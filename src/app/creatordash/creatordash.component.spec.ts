import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatordashComponent } from './creatordash.component';

describe('CreatordashComponent', () => {
  let component: CreatordashComponent;
  let fixture: ComponentFixture<CreatordashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatordashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatordashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
