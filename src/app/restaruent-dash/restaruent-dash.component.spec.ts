import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaruentDashComponent } from './restaruent-dash.component';

describe('RestaruentDashComponent', () => {
  let component: RestaruentDashComponent;
  let fixture: ComponentFixture<RestaruentDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaruentDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaruentDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
