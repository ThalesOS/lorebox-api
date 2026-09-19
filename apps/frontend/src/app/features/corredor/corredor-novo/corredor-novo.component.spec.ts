import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorredorFormComponent } from './corredor-novo.component';

describe('CorredorFormComponent', () => {
  let component: CorredorFormComponent;
  let fixture: ComponentFixture<CorredorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorredorFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CorredorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
