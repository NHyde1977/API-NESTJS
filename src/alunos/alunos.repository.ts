import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class AlunosRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

async findAll(
  curso?: string,
  nome?: string,
  page = 1,
  limit = 10,
) {
  const skip = (page - 1) * limit;

  return this.prisma.aluno.findMany({
    where: {
      ...(curso && {
        curso,
      }),
      ...(nome && {
        nome: {
          contains: nome,
        },
      }),
    },
    orderBy: {
      id: 'asc',
    },
    skip,
    take: limit,
  });
}

  async findById(id: number) {
    return this.prisma.aluno.findUnique({
      where: {
        id,
      },
    });
  }

  async create(
    nome: string,
    curso: string,
    email: string,
  ) {
    return this.prisma.aluno.create({
      data: {
        nome,
        curso,
        email,
      },
    });
  }

  async update(
    id: number,
    nome: string,
    curso: string,
    email: string,
  ) {
    return this.prisma.aluno.update({
      where: {
        id,
      },
      data: {
        nome,
        curso,
        email,
      },
    });
  }

  async delete(id: number) {
    return this.prisma.aluno.delete({
      where: {
        id,
      },
    });
  }
}