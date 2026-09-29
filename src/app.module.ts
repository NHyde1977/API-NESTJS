import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { AlunosModule } from './alunos/alunos.module.js';
import { ProfessoresModule } from './professores/professores.module.js';
import { ConfigModule } from '@nestjs/config';
import { DisciplinasModule } from './disciplinas/disciplinas.module.js';
import { PrismaModule } from './prisma/prisma.module.js';


export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    // Distributed tracing, auto-correlated logs, request/job metrics, error
    // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com
     ConfigModule.forRoot({
      isGlobal: true,}),
    ObserveModule.forRoot({
      appKey: 'YOUR_APP_KEY',
      appSecret: 'YOUR_APP_SECRET',
      serviceId: 'api-alunos',
    }),
    AlunosModule,
    ProfessoresModule,
    DisciplinasModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
