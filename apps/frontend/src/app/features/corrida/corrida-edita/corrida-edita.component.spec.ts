import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorridaEditaComponent } from './corrida-edita.component';

describe('CorridaEditaComponent', () => {
  let component: CorridaEditaComponent;
  let fixture: ComponentFixture<CorridaEditaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorridaEditaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorridaEditaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
