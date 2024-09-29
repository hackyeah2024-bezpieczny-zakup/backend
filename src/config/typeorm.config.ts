import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { join } from 'path';
import { cwd } from 'process';
import { DataSource } from 'typeorm';

export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => {
    const getEnv = <T>(envVar: string) => configService.get<T>(envVar);
    const entitiesPath = join(cwd(), 'dist/**/*.entity{.js,.ts}');
    return {
      type: getEnv<any>('DB_TYPE'),
      host: getEnv<string>('DB_HOST'),
      port: getEnv<number>('DB_PORT'),
      username: getEnv<string>('DB_USERNAME'),
      password: getEnv<string>('DB_PASSWORD'),
      database: getEnv<string>('DB_NAME'),
      entities: [entitiesPath],
      logging: getEnv<boolean>('DB_IS_LOGGING_ENABLED') ?? false,
      synchronize: getEnv<boolean>('DB_IS_SYNCHRONIZING_ENABLED') ?? false,
      autoLoadEntities: true,
      retryAttempts: Infinity,
    };
  },
  dataSourceFactory: async (options) =>
    await new DataSource(options).initialize(),
};
