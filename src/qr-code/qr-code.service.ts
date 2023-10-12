import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as qrcode from 'qrcode';
import { Cron, CronExpression } from '@nestjs/schedule';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class QrCodeService {
  constructor(private readonly configService: ConfigService) {}

  @Cron(CronExpression.EVERY_10_SECONDS)
  async generateQrCode(): Promise<string> {
    try {
      const movies = this.configService.get<string>('MOVIE_URL');
      const qrCodeDataURL = await qrcode.toDataURL(movies);
      return qrCodeDataURL;
    } catch (error) {
      throw new HttpException(
        'Failed to generate Qrcode',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
