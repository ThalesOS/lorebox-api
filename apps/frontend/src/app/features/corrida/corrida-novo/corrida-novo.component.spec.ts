import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorridaNovoComponent } from './corrida-novo.component';

describe('CorridaNovoComponent', () => {
  let component: CorridaNovoComponent;
  let fixture: ComponentFixture<CorridaNovoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorridaNovoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorridaNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
