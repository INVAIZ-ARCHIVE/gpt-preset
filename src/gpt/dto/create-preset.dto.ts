import { IsIn, IsNotEmpty, IsString } from 'class-validator';

export enum HostApplication {
  Photoshop = 'Photoshop',
  LightroomClassic = 'Lightroom Classic',
  PremierePro = 'Premiere Pro',
  Illustrator = 'Illustrator',
  AfterEffects = 'After Effects',
  InDesign = 'InDesign',
  Hangeul = 'Hangeul',
  FinalCutPro = 'FinalCutPro',
}

export type OptinalHostApp =
  | Exclude<HostApplication, HostApplication.FinalCutPro>
  | undefined;

export enum Device {
  GridPro = 'GridPro',
  Grid10 = 'Grid10',
}

export class CreatePresetDto {
  @IsString()
  @IsNotEmpty()
  content: string;

  @IsNotEmpty()
  @IsIn(Object.values(HostApplication))
  hostApp: HostApplication;

  @IsNotEmpty()
  @IsIn(Object.values(Device))
  device: Device;
}
