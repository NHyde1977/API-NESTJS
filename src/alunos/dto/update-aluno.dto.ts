import {
  IsNotEmpty,
  IsString,
  MaxLength,
  IsEmail
} from 'class-validator';

export class UpdateAlunoDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  nome: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  curso: string;
  
  @IsEmail()
  @IsNotEmpty()
  email: string;
}