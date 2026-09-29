import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { PrismaClient } from '../generated/prisma/client.js';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleDestroy
{
  constructor(configService: ConfigService) {
    const adapter = new PrismaMariaDb({
      host: configService.get<string>('DB_HOST')!,
      port: Number(configService.get<string>('DB_PORT')),
      user: configService.get<string>('DB_USER')!,
      password: configService.get<string>('DB_PASSWORD')!,
      database: configService.get<string>('DB_NAME')!,
      connectionLimit: 5,
    });

    super({ adapter });
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}