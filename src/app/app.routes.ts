import { Routes } from '@angular/router';
import {MovieDetailComponent} from "./movie/detail/movie-detail.component";
import {MovieListComponent} from "./movie/list/movie-list.component";
import {movieResolver} from "./movie/resolver/movie-routing-resolve.service";

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/movies',
    pathMatch: 'full'
  },
  {
    path: 'movies',
    component: MovieListComponent,
    data: {
      title: 'Movie List'
    },
  },
  {
    path: 'movies/:movieId',
    component: MovieDetailComponent,
    data: {
      title: 'Movie Details'
    },
    resolve: {
      movie: movieResolver,
    }
  }
];
