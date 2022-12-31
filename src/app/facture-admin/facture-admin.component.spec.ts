import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureAdminComponent } from './facture-admin.component';

describe('FactureAdminComponent', () => {
  let component: FactureAdminComponent;
  let fixture: ComponentFixture<FactureAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactureAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FactureAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
