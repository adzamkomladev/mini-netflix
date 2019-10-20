import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';

import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private readonly moviesUrl = `${environment.moviesApiUrl}&s=Aviatior`;

  private movies: Movie[];

  constructor(private http: HttpClient) {
    this.movies = [];

    this.http
      .get<Movie[]>(this.moviesUrl)
      .pipe(
        take(1),
        tap(movies => (this.movies = movies))
      )
      .subscribe();
  }

  getAll(): Movie[] {
    return this.movies;
  }

  get(imdbID: string): Movie | undefined {
    return this.movies.find(movie => movie.imdbID === imdbID);
  }

  search(text: string): Movie[] {
    return this.movies.filter(movie => movie.Title.includes(text));
  }

  filter(imdbIDs: string[]): Movie[] {
    return this.movies.filter(movie => imdbIDs.includes(movie.imdbID));
  }
}
