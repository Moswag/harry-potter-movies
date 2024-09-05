import {Injectable} from '@angular/core';
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

  filterMovies(movies: Movie[], titleFilter: string, releaseYearFilter: number): Movie[] {
    return movies.filter((movie: Movie) => {
      const movieReleaseYear: string = movie.release_date.split('-')[0];
      const movieTitle: string = movie.title.toLowerCase();
      const matchTitle: boolean = movieTitle.includes(titleFilter.toLowerCase());
      const matchReleaseYear: boolean = releaseYearFilter == null ? true : movieReleaseYear.startsWith(releaseYearFilter.toString());
      return matchTitle && matchReleaseYear;
    });
  }

  findMovieById(id: string): Observable<MovieDetail> {
    return this.http.get<MovieDetail>(`${this.resourceUrl}/${id}`);
  }
}
