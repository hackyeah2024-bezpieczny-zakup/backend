import { ICheckUrlResponseDto, UrlStatus } from 'src/types/url';

export class CheckUrlResponseDto implements ICheckUrlResponseDto {
  urlStatus: UrlStatus;
}
