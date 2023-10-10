import { Controller, Get, Render } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private movieService: MoviesService) {}

  @Get('/all-movies')
  @Render('movies')
  getMovies() {
    const movies = this.movieService.getMovies();
    return { movies };
  }
}
