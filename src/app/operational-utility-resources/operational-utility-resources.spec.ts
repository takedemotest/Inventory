import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationalUtilityResources } from './operational-utility-resources';

describe('OperationalUtilityResources', () => {
  let component: OperationalUtilityResources;
  let fixture: ComponentFixture<OperationalUtilityResources>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperationalUtilityResources],
    }).compileComponents();

    fixture = TestBed.createComponent(OperationalUtilityResources);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
