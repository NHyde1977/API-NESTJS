import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength
} from 'class-validator';

export class CreateAlunoDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  curso: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}