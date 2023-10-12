import { Injectable, Logger, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { media_entity } from '@prisma/client';
import { randomizeArrayOrder } from '../utils/utility';

@Injectable()
export class MoviesService {
  private readonly logger = new Logger(MoviesService.name);
  constructor(private prisma: PrismaService) {}

  async getMovies(): Promise<media_entity[]> {
    try {
      const result = await this.prisma.media_entity.findMany();
      return randomizeArrayOrder(result);
    } catch (error) {
      this.logger.error(
        `Failed to fetch movies: ${error.message}`,
        error.stack,
      );
      throw new HttpException(
        'Failed to fetch movies',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
