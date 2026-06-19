import { Injectable } from '@nestjs/common';

@Injectable()
export class WebhookService {
  webhookMock(dto: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { details } = dto;
    console.log('details: ', details);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    return { details };
  }
}
