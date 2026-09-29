import { Injectable } from '@nestjs/common';

import {
  PrismaService,
} from '../prisma/prisma.service.js';

@Injectable()
export class DisciplinasRepository {
  constructor(
    private readonly prisma:
      PrismaService,
  ) {}

  async findAll() {
    return this.prisma.disciplina.findMany({
      orderBy: {
        id: 'asc',
      },
    });
  }

  async findById(id: number) {
    return this.prisma.disciplina.findUnique({
      where: {
        id,
      },
    });
  }

  async create(
    nome: string,
    carga_horaria: number,
  ) {
    return this.prisma.disciplina.create({
      data: {
        nome,
        cargaHoraria: carga_horaria,
      },
    });
  }

  async update(
    id: number,
    nome: string,
    carga_horaria: number,
  ) {
    return this.prisma.disciplina.update({
      where: {
        id,
      },
      data: {
        nome,
        cargaHoraria: carga_horaria,
      },
    });
  }

  async delete(id: number) {
    return this.prisma.disciplina.delete({
      where: {
        id,
      },
    });
  }
}