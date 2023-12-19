import { IsIn, IsNotEmpty, IsString } from 'class-validator';

export type HostApplication =
  | 'Photoshop'
  | 'Lightroom Classic'
  | 'Premiere Pro'
  | 'Illustrator'
  | 'After Effects'
  | 'InDesign'
  | 'Hangeul';

export class CreatePresetDto {
  @IsString()
  @IsNotEmpty()
  content: string;

  @IsNotEmpty()
  @IsIn([
    'Photoshop',
    'Premiere Pro',
    'Lightroom Classic',
    'Illustrator',
    'InDesign',
    'Hangeul',
  ])
  hostApp: HostApplication;
}
