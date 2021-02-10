import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpformComponent } from './tpform.component';

describe('TpformComponent', () => {
  let component: TpformComponent;
  let fixture: ComponentFixture<TpformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TpformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TpformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
