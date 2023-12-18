import { IsIn, IsNotEmpty, IsString } from 'class-validator';

export type HostApplication =
  | 'Premiere Pro'
  | 'Photoshop'
  | 'Lightroom Classic';

export class CreatePresetDto {
  @IsString()
  @IsNotEmpty()
  content: string;

  @IsNotEmpty()
  @IsIn(['Premiere Pro', 'Photoshop', 'Lightroom Classic'])
  hostApp: HostApplication;
}
