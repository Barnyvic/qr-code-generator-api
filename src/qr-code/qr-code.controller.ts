import { Controller, Get, Render } from '@nestjs/common';
import { QrCodeService } from './qr-code.service';

@Controller('qr-code')
export class QrCodeController {
  constructor(private readonly qrCodeService: QrCodeService) {}

  @Get('/get-code')
  @Render('index')
  async getMoviesAndQrCode() {
    const qrCodeBuffer = await this.qrCodeService.generateQrCode();
    return { qrCodeBuffer };
  }
}
