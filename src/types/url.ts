enum UrlStatus {
  VERIFIED,
  NOT_VERIFIED,
  DANGER,
}

interface ICreateCheckUrlDto {
  url: string;
}

interface ICheckUrlResponseDto {
  urlStatus: UrlStatus;
}

interface IUrlEntity extends ICreateCheckUrlDto {
  id: string;
  regonNo: string;
  businessFoundedAt: Date;
  siteFoundedAt: Date;
  createdAt: Date;
}

export { UrlStatus, ICreateCheckUrlDto, ICheckUrlResponseDto, IUrlEntity };
