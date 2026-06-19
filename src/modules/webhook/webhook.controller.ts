import { Body, Controller, Post } from '@nestjs/common';
import { WebhookService } from './webhook.service';
import { webhookDto } from './dto/webhook.dto';

@Controller('webhook')
export class WebhookController {
  constructor(private readonly webhookService: WebhookService) {}
  @Post('mock-hook')
  webhookMock(@Body() dto: webhookDto) {
    try {
      console.log('webook recieved');
      return this.webhookService.webhookMock(dto);
    } catch (error) {
      return `error ${error}`;
    }
  }
}
