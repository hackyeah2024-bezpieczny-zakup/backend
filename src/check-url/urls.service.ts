import { Injectable } from '@nestjs/common';
import { CreateCheckUrlDto } from './dto/create-check-url.dto';
// import { UrlStatus } from 'src/types/url';
import { CheckUrlResponseDto } from './dto/check-url-response.dto';
import { plainToInstance } from 'class-transformer';
import { UrlEntity } from './entities/url.entity';
import { UrlStatus } from 'src/types/url';

@Injectable()
export class UrlsService {
  async checkUrl({ url }: CreateCheckUrlDto): Promise<CheckUrlResponseDto> {
    const isUrlInDb = await UrlEntity.findOneBy({ url });

    const urlStatus: UrlStatus = isUrlInDb
      ? UrlStatus.VERIFIED
      : UrlStatus.DANGER;

    return plainToInstance(CheckUrlResponseDto, { urlStatus });
  }
}
