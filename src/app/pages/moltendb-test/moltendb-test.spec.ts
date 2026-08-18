import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMoltenDb } from '@moltendb-web/angular';

import { MoltendbTest } from './moltendb-test';

describe('MoltendbTest', () => {
  let component: MoltendbTest;
  let fixture: ComponentFixture<MoltendbTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoltendbTest],
      providers: [provideMoltenDb({ name: 'moltendb_test_spec', inMemory: true })],
    }).compileComponents();

    fixture = TestBed.createComponent(MoltendbTest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
