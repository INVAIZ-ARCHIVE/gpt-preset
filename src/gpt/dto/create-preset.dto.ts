import { IsIn, IsNotEmpty, IsString } from 'class-validator';

export enum HostApplication {
  Photoshop = 'Photoshop',
  LightroomClassic = 'Lightroom Classic',
  PremierePro = 'Premiere Pro',
  Illustrator = 'Illustrator',
  AfterEffects = 'After Effects',
  InDesign = 'InDesign',
  Hangeul = 'Hangeul',
}

export class CreatePresetDto {
  @IsString()
  @IsNotEmpty()
  content: string;

  @IsNotEmpty()
  @IsIn(Object.values(HostApplication))
  hostApp: HostApplication;
}
