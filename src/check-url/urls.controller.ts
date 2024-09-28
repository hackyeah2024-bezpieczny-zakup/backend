import { Controller, Get, Body } from '@nestjs/common';
import { UrlsService } from './urls.service';
import { CreateCheckUrlDto } from './dto/create-check-url.dto';

@Controller('urls')
export class UrlsController {
  constructor(private readonly urlService: UrlsService) {}

  @Get('/check')
  async checkUrl(@Body() createCheckUrlDto: CreateCheckUrlDto) {
    return this.urlService.checkUrl(createCheckUrlDto);
  }
}
