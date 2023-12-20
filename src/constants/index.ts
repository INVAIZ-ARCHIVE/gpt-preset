import { HostApplication } from 'src/gpt/dto/create-preset.dto';
import { after_effects_messages } from './after-effects';
import { hangule_message } from './hangeul';
import { indesign_messages } from './indesign';
import { illustrator_messages } from './illustrator';
import { lightroom_messages } from './lightroom-classic';
import { photoshop_messages } from './photoshop';
import { premiere_messages } from './premiere-pro';

const messageMap = {
  [HostApplication.AfterEffects]: after_effects_messages,
  [HostApplication.Hangeul]: hangule_message,
  [HostApplication.Illustrator]: illustrator_messages,
  [HostApplication.LightroomClassic]: lightroom_messages,
  [HostApplication.Photoshop]: photoshop_messages,
  [HostApplication.PremierePro]: premiere_messages,
  [HostApplication.InDesign]: indesign_messages,
};

export default messageMap;
