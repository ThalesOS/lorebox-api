import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorridaExibeComponent } from './corrida-exibe.component';

describe('CorridaExibeComponent', () => {
  let component: CorridaExibeComponent;
  let fixture: ComponentFixture<CorridaExibeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorridaExibeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorridaExibeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
