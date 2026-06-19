import { Body, Controller, Post } from '@nestjs/common';
import { WebhookService } from './webhook.service';

@Controller('webhook')
export class WebhookController {
  constructor(private readonly webhookService: WebhookService) {}
  @Post('mock-hook')
  webhookMock(@Body() dto: any) {
    try {
      console.log('webook recieved');
      return this.webhookService.webhookMock(dto);
    } catch (error) {
      return `error ${error}`;
    }
  }
}
