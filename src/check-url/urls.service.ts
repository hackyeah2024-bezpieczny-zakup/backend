import { Injectable } from '@nestjs/common';
import { CreateCheckUrlDto } from './dto/create-check-url.dto';
import { UrlStatus } from 'src/types/url';
import { CheckUrlResponseDto } from './dto/check-url-response.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class UrlsService {
  async checkUrl({ url }: CreateCheckUrlDto): Promise<CheckUrlResponseDto> {
    console.log('CHECKING URL: ', url);

    const urlStatus = UrlStatus[
      UrlStatus[Math.floor(Math.random() * 3 + 1)] as any
    ] as unknown as UrlStatus;

    return plainToInstance(CheckUrlResponseDto, { urlStatus });
  }
}
