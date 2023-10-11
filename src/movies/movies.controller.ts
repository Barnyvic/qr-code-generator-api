import { Controller, Get, Render } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Media } from './movie.interface';

@Controller('movies')
export class MoviesController {
  private readonly movies: Media[];

  constructor(private movieService: MoviesService) {}

  @Get('/all-movies')
  @Render('movies')
  async getMovies() {
    const movies = await this.movieService.getMovies();
    return { movies };
  }
}
