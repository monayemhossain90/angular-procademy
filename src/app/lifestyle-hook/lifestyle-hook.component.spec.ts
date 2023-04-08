import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifestyleHookComponent } from './lifestyle-hook.component';

describe('LifestyleHookComponent', () => {
  let component: LifestyleHookComponent;
  let fixture: ComponentFixture<LifestyleHookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifestyleHookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifestyleHookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
