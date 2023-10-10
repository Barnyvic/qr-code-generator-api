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
      const movies = 'https://pornhub.com';
      const qrCodeDataURL = await qrcode.toDataURL(movies);
      console.log('@@@@');
      return qrCodeDataURL;
    } catch (error) {
      throw new Error('Failed to generate QR code.');
    }
  }
}
