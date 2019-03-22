import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogincreatorComponent } from './logincreator.component';

describe('LogincreatorComponent', () => {
  let component: LogincreatorComponent;
  let fixture: ComponentFixture<LogincreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogincreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogincreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
