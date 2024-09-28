import { IUrlEntity } from 'src/types/url';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
} from 'typeorm';

@Entity()
export class UrlEntity extends BaseEntity implements IUrlEntity {
  @PrimaryColumn({
    type: 'varchar',
    length: 36,
    default: () => 'uuid_generate_v4()',
  })
  id: string;

  @Column({
    type: 'text',
    nullable: true,
    default: null,
  })
  regonNo: string;

  @Column({
    type: 'timestamp with time zone',
    nullable: true,
    default: null,
  })
  businessFoundedAt: Date;

  @Column({
    type: 'timestamp with time zone',
    nullable: true,
    default: null,
  })
  siteFoundedAt: Date;

  @CreateDateColumn({
    type: 'timestamp with time zone',
  })
  createdAt: Date;

  @Column({
    type: 'timestamp with time zone',
  })
  url: string;
}
