import { Injectable } from '@nestjs/common';
import * as qrcode from 'qrcode';
import { MoviesService } from '../movies/movies.service';

@Injectable()
export class QrCodeService {
  constructor(private readonly movieService: MoviesService) {}
  async generateQrCode(): Promise<string> {
    try {
      const movies = 'https://pornhub.com';
      const qrCodeDataURL = await qrcode.toDataURL(movies);
      return qrCodeDataURL;
    } catch (error) {
      throw new Error('Failed to generate QR code.');
    }
  }
}
