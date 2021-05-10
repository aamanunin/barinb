import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { NotFoundPageComponent } from './not-found-page.component';
import { NotFoundPageRoutingModule } from './not-found-page-routing.module';

describe('NotFoundPageRoutingModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotFoundPageRoutingModule],
      declarations: [
        // TODO: Fix jest imports
        NotFoundPageComponent,
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  it('should create', () => {
    expect(NotFoundPageRoutingModule).toBeTruthy();
  });
});
