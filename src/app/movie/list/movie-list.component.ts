import {Component, OnInit} from '@angular/core';
import {Movie} from "../movie.model";
import {MovieService} from "../service/movie.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit {
  allMovies: Movie[] = [];


  constructor(private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(data => {
      this.allMovies = data;
    });
  }
}
