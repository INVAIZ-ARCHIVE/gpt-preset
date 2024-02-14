import { HostApplication } from '../../gpt/dto/create-preset.dto';
import { w10_after_effects } from './Windows/after-effects';
import { w10_hangule } from './Windows/hangeul';
import { w10_indesign } from './Windows/indesign';
import { w10_lightroom } from './Windows/lightroom-classic';
import { c10_photoshop } from './common/photoshop';
import { c10_premiere } from './common/premiere-pro';
import { c10_illustrator } from './common/illustrator';

import { m10_after_effects } from './macOs/after-effects';
import { m10_hanglue } from './macOs/hangeul';
import { m10_indesign } from './macOs/indesign';
import { m10_lightroom } from './macOs/lightroom-classic';
import { DeviceMessageMap, MessageMap } from '..';

const w_grid10_message_map: MessageMap = {
  [HostApplication.AfterEffects]: w10_after_effects,
  [HostApplication.Hangeul]: w10_hangule,
  [HostApplication.LightroomClassic]: w10_lightroom,
  [HostApplication.InDesign]: w10_indesign,
  [HostApplication.Illustrator]: c10_illustrator,
  [HostApplication.Photoshop]: c10_photoshop,
  [HostApplication.PremierePro]: c10_premiere,
};

const m_grid10_message_map: MessageMap = {
  [HostApplication.AfterEffects]: m10_after_effects,
  [HostApplication.Hangeul]: m10_hanglue,
  [HostApplication.LightroomClassic]: m10_lightroom,
  [HostApplication.InDesign]: m10_indesign,
  [HostApplication.Illustrator]: c10_illustrator,
  [HostApplication.Photoshop]: c10_photoshop,
  [HostApplication.PremierePro]: c10_premiere,
};

const Grid10MessageMap: DeviceMessageMap = {
  windows: w_grid10_message_map,
  macOs: m_grid10_message_map,
};

export default Grid10MessageMap;
