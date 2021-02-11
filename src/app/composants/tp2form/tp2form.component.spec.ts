import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tp2formComponent } from './tp2form.component';

describe('Tp2formComponent', () => {
  let component: Tp2formComponent;
  let fixture: ComponentFixture<Tp2formComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tp2formComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tp2formComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
