import { Injectable } from '@nestjs/common';
import * as qrcode from 'qrcode';
import { MoviesService } from '../movies/movies.service';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class QrCodeService {
  constructor(private readonly movieService: MoviesService) {}

  @Cron(CronExpression.EVERY_10_SECONDS)
  async generateQrCode(): Promise<string> {
    try {
      const movies = 'https://ill-fox-cap.cyclic.app/api/v1/movies/all-movies';
      const qrCodeDataURL = await qrcode.toDataURL(movies);
      return qrCodeDataURL;
    } catch (error) {
      throw new Error('Failed to generate QR code.');
    }
  }
}
