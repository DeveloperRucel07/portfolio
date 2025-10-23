import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testimoni } from './testimoni';

describe('Testimoni', () => {
  let component: Testimoni;
  let fixture: ComponentFixture<Testimoni>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testimoni]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Testimoni);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
