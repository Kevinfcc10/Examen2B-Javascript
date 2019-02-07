import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionEventoComponent } from './informacion-evento.component';

describe('InformacionEventoComponent', () => {
  let component: InformacionEventoComponent;
  let fixture: ComponentFixture<InformacionEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
