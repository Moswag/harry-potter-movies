import {Component, OnInit} from '@angular/core';
import {Movie} from "../movie.model";
import {MovieService} from "../service/movie.service";
import {RouterLink} from "@angular/router";
import {DurationPipe} from "../../shared/pipes/duration/duration.pipe";
import {BudgetPipe} from "../../shared/pipes/budget/budget.pipe";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [
    RouterLink,
    DurationPipe,
    BudgetPipe,
    FormsModule
  ],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit {
  allMovies: Movie[] = [];
  filteredMovies: Movie[] = [];
  titleFilter: string = '';
  releaseYearFilter!: number;


  constructor(private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(data => {
      this.allMovies = data;
      this.filteredMovies = this.allMovies;
    });
  }

  filterMovies(): void {
    this.filteredMovies = this.movieService.filterMovies(
      this.allMovies,
      this.titleFilter,
      this.releaseYearFilter
    );
  }
}
