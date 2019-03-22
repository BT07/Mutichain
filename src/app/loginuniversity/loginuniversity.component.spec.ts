import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginuniversityComponent } from './loginuniversity.component';

describe('LoginuniversityComponent', () => {
  let component: LoginuniversityComponent;
  let fixture: ComponentFixture<LoginuniversityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginuniversityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginuniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
