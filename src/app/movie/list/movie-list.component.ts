import {Component, OnInit} from '@angular/core';
import {Movie} from "../movie.model";
import {MovieService} from "../service/movie.service";
import {RouterLink} from "@angular/router";
import {DurationPipe} from "../../shared/pipes/duration/duration.pipe";
import {BudgetPipe} from "../../shared/pipes/budget/budget.pipe";

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [
    RouterLink,
    DurationPipe,
    BudgetPipe
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
