import { Controller, Get, Render } from '@nestjs/common';
import { MoviesService } from './movies.service';
import * as fs from 'fs';
import * as path from 'path';
import { Media } from './movie.interface';

@Controller('movies')
export class MoviesController {
  private readonly movies: Media[];

  constructor(private movieService: MoviesService) {
    const filePath = path.join(__dirname, '../../film.json');
    const rawData = fs.readFileSync(filePath, 'utf8');
    this.movies = JSON.parse(rawData);
  }

  @Get('/all-movies')
  @Render('movies')
  async getMovies() {
    const movies = await this.movieService.getMovies();
    return { movies };
  }

  @Get('create')
  createMovies() {
    const result = this.movieService.createMovies(this.movies);
  }
}
