import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeampulseComponent } from './teampulse.component';

describe('TeampulseComponent', () => {
  let component: TeampulseComponent;
  let fixture: ComponentFixture<TeampulseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeampulseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeampulseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
