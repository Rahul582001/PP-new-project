import { Injectable } from '@nestjs/common';

@Injectable()
export class WebhookService {
  webhookMock(dto: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { description } = dto;
    return `Merged requests commited to gitHubb ${description}`;
  }
}
