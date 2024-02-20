import { TestBed } from '@angular/core/testing';
import { BandListComponent } from './band-list.component';

describe('BandListComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BandListComponent],
    }).compileComponents();
  });
});
