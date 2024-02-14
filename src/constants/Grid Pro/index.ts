import { HostApplication } from '../../gpt/dto/create-preset.dto';
import { w_pro_after_effects } from './Windows/after-effects';
import { w_pro_indesign } from './Windows/indesign';
import { w_pro_lightroom } from './Windows/lightroom-classic';
import { c_pro_photoshop } from './common/photoshop';
// import { c_pro_premiere } from './common/premiere-pro';
import { c_pro_illustrator } from './common/illustrator';

import { m_pro_after_effects } from './macOs/after-effects';
import { m_pro_indesign } from './macOs/indesign';
import { m_pro_lightroom } from './macOs/lightroom-classic';
import { DeviceMessageMap, WindowsMessageMap } from '../index';

const w_gridpro_message_map: WindowsMessageMap = {
  [HostApplication.AfterEffects]: w_pro_after_effects,
  [HostApplication.LightroomClassic]: w_pro_lightroom,
  [HostApplication.InDesign]: w_pro_indesign,
  [HostApplication.Illustrator]: c_pro_illustrator,
  [HostApplication.Photoshop]: c_pro_photoshop,
  [HostApplication.PremierePro]: c_pro_photoshop,
  [HostApplication.Hangeul]: c_pro_photoshop,
};

const m_gridpro_message_map: WindowsMessageMap = {
  [HostApplication.AfterEffects]: m_pro_after_effects,
  [HostApplication.LightroomClassic]: m_pro_lightroom,
  [HostApplication.InDesign]: m_pro_indesign,
  [HostApplication.Illustrator]: c_pro_illustrator,
  [HostApplication.Photoshop]: c_pro_photoshop,
  [HostApplication.Hangeul]: c_pro_photoshop,
  [HostApplication.PremierePro]: c_pro_photoshop,
};

const GridProMessageMap: DeviceMessageMap = {
  windows: w_gridpro_message_map,
  macOs: m_gridpro_message_map,
};

export default GridProMessageMap;
