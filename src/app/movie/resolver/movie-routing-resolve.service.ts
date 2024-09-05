import {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from "@angular/router";
import {inject} from "@angular/core";
import {Movie} from "../movie.model";
import {MovieService} from "../service/movie.service";

export const movieResolver: ResolveFn<Movie> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  return inject(MovieService).findMovieById(route.paramMap.get('movieId')!);
};
