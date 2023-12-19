import { IsIn, IsNotEmpty, IsString } from 'class-validator';

export type HostApplication =
  | 'Photoshop'
  | 'Lightroom Classic'
  | 'Premiere Pro'
  | 'Illustrator'
  | 'After Effects'
  | 'InDesign';

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
  ])
  hostApp: HostApplication;
}
