import { Controller } from '@nestjs/common';
import { LogoutService } from './logout.service';

@Controller('logout')
export class LogoutController {
  constructor(private readonly logoutService: LogoutService) {}
}
