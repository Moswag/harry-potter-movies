import {Component, OnInit} from '@angular/core';
import {MovieDetail} from "../movie-detail.model";
import {ActivatedRoute} from "@angular/router";
import {BudgetPipe} from "../../shared/pipes/budget/budget.pipe";
import {DurationPipe} from "../../shared/pipes/duration/duration.pipe";

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [
    BudgetPipe,
    DurationPipe
  ],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent  implements OnInit {
  movie!: MovieDetail;

  constructor(private route: ActivatedRoute,) {
  }

  ngOnInit(): void {
    this.route.data.subscribe(({movie}) => {
      this.movie = movie;
    });
  }

  previousUrl(): void {
    history.back();
  }
}

