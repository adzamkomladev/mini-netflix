import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private readonly moviesUrl = `${environment.moviesApiUrl}&s=Aviator`;

  private movies: Observable<Movie[]>;

  constructor(private http: HttpClient) {
    this.movies = this.http
      .get<{ Search: Movie[] }>(this.moviesUrl)
      .pipe(pluck('Search'));
  }

  getAll(): Observable<Movie[]> {
    return this.movies;
  }

  get(imdbID: string): Observable<Movie | undefined> {
    return this.movies.pipe(
      map(movies => movies.find(movie => movie.imdbID === imdbID))
    );
  }

  search(text: string): Observable<Movie[]> {
    return this.movies.pipe(
      map(movies =>
        movies.filter(movie =>
          movie.Title.toLowerCase().includes(text.toLowerCase())
        )
      )
    );
  }

  filter(imdbIDs: string[]): Observable<Movie[]> {
    return this.movies.pipe(
      map(movies => movies.filter(movie => imdbIDs.includes(movie.imdbID)))
    );
  }
}
