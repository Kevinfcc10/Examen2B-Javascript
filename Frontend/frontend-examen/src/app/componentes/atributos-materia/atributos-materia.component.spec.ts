import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtributosMateriaComponent } from './atributos-materia.component';

describe('AtributosMateriaComponent', () => {
  let component: AtributosMateriaComponent;
  let fixture: ComponentFixture<AtributosMateriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtributosMateriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtributosMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
