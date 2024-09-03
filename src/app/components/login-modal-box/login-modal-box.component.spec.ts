import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginModalBoxComponent } from './login-modal-box.component';

describe('LoginModalBoxComponent', () => {
  let component: LoginModalBoxComponent;
  let fixture: ComponentFixture<LoginModalBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginModalBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginModalBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
