import { ChatCompletionMessageParam } from 'openai/resources';
import { HostApplication } from '../gpt/dto/create-preset.dto';
import Grid10MessageMap from './Grid10';
import GridProMessageMap from './Grid Pro';

export interface DeviceMessageMap {
  windows: MessageMap;
  macOs: MessageMap;
}
export type MessageMap = {
  [key in Exclude<
    HostApplication,
    HostApplication.FinalCutPro
  >]?: ChatCompletionMessageParam[];
} & {
  FinalCutPro?: ChatCompletionMessageParam[];
};

const deviceMessageMap = {
  GridPro: GridProMessageMap,
  Grid10: Grid10MessageMap,
};

export default deviceMessageMap;
