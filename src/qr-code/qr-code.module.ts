import { Module } from '@nestjs/common';
import { QrCodeService } from './qr-code.service';
import { QrCodeController } from './qr-code.controller';
import { MoviesModule } from '../movies/movies.module';

@Module({
  providers: [QrCodeService],
  controllers: [QrCodeController],
  imports: [MoviesModule],
})
export class QrCodeModule {}
