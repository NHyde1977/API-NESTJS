import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import {
  AlunosRepository,
} from './alunos.repository.js';

import {
  CreateAlunoDto,
} from './dto/create-aluno.dto.js';

import {
  UpdateAlunoDto,
} from './dto/update-aluno.dto.js';

@Injectable()
export class AlunosService {
  constructor(
    private readonly alunosRepository:
      AlunosRepository,
  ) {}

  findAll() {
    return this.alunosRepository.findAll();
  }

  async findById(id: number) {
    const aluno =
      await this.alunosRepository.findById(
        id,
      );

    if (!aluno) {
      throw new NotFoundException(
        'Aluno não encontrado',
      );
    }

    return aluno;
  }

  create(data: CreateAlunoDto) {
    return this.alunosRepository.create(
      data.nome,
      data.curso,
      data.email,
    );
  }

  async update(
    id: number,
    data: UpdateAlunoDto,
  ) {
    await this.findById(id);

    await this.alunosRepository.update(
      id,
      data.nome,
      data.curso,
      data.email,
    );

    return this.findById(id);
  }

  async delete(id: number) {
    await this.findById(id);

    await this.alunosRepository.delete(id);
  }
}