import { Controller, Get, Render } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private movieService: MoviesService) {}

  @Get('/all-movies')
  @Render('movies')
  async getMovies() {
    const movies = await this.movieService.getMovies();
    return { movies };
  }
}
