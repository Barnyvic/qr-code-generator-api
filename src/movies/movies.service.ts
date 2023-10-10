import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { Media } from './movie.interface';

@Injectable()
export class MoviesService {
  private readonly movies: Media[];
  constructor() {
    const filePath = path.join(__dirname, '../../film.json');
    const rawData = fs.readFileSync(filePath, 'utf8');
    this.movies = JSON.parse(rawData);
  }
  getMovies() {
    const result = this.shuffleArray(this.movies);
    return result;
  }

  private shuffleArray(array: Media[]) {
    const shuffledArray = [...array];

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }

    return shuffledArray;
  }
}
