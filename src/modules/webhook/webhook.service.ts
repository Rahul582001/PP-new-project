import { Injectable } from '@nestjs/common';

@Injectable()
export class WebhookService {
  webhookMock(dto: any) {
    console.log('dto: ', dto);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    return;
  }
}
