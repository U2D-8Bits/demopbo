import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoAdministracionComponent } from './producto-administracion.component';

describe('ProductoAdministracionComponent', () => {
  let component: ProductoAdministracionComponent;
  let fixture: ComponentFixture<ProductoAdministracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoAdministracionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoAdministracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
