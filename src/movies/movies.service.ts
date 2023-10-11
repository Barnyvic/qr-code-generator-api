import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { Media } from './movie.interface';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, media_entity } from '@prisma/client';

@Injectable()
export class MoviesService {
  private readonly movies: Media[];
  constructor(private prisma: PrismaService) {
    const filePath = path.join(__dirname, '../../film.json');
    const rawData = fs.readFileSync(filePath, 'utf8');
    this.movies = JSON.parse(rawData);
  }

  async createMovies(data: Prisma.media_entityCreateManyInput[]) {
    const result = await this.prisma.media_entity.createMany({
      data: data,
    });
  }
  async getMovies() {
    const result = await this.prisma.media_entity.findMany();
    return this.shuffleArray(result);
  }

  private shuffleArray(array: Media[]) {
    if (!array || array.length === 0) {
      return [];
    }

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
