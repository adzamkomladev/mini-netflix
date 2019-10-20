import { TestBed } from '@angular/core/testing';

import { FavouriteMovieService } from './favourite-movie.service';

describe('FavouriteMovieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FavouriteMovieService = TestBed.get(FavouriteMovieService);
    expect(service).toBeTruthy();
  });
});
