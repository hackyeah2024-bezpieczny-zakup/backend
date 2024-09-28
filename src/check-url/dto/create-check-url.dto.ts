import { IsNotEmpty, IsString, IsUrl } from 'class-validator';
import { ICreateCheckUrlDto } from 'src/types/url';

export class CreateCheckUrlDto implements ICreateCheckUrlDto {
  @IsNotEmpty()
  @IsString()
  @IsUrl()
  url: string;
}
