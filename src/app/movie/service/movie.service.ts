import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Movie} from "../movie.model";
import {MovieDetail} from "../movie-detail.model";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  protected resourceUrl = '/movies';

  constructor(private http: HttpClient) {
  }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.resourceUrl);
  }

  findMovieById(id: string): Observable<MovieDetail> {
    return this.http.get<MovieDetail>(`${this.resourceUrl}/${id}`);
  }
}
