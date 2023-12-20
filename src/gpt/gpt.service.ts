import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';
import { ChatCompletionMessageParam } from 'openai/resources';
import { premiere_messages } from '../constants/premiere-pro';
import { HostApplication } from './dto/create-preset.dto';
import { illustrator_messages } from 'src/constants/illustrator';
import { lightroom_messages } from './../constants/lightroom-classic';
import { hangule_message } from 'src/constants/hangeul';

export enum MessageMap {
  PremierePro = 'Premiere Pro',
  Illustrator = 'Illustrator',
  LightroomClassic = 'Lightroom Classic',
  Hangeul = 'Hangeul',
}

@Injectable()
export class GptService {
  private readonly openai: OpenAI;
  private readonly messageMap: Record<HostApplication, any[]>;
  constructor(private readonly configService: ConfigService) {
    this.openai = new OpenAI({
      apiKey: this.configService.get('OPENAI_API_KEY'),
    });
    this.messageMap = {
      [HostApplication.PremierePro]: premiere_messages,
      [HostApplication.Illustrator]: illustrator_messages,
      [HostApplication.LightroomClassic]: lightroom_messages,
      [HostApplication.Hangeul]: hangule_message,
      [HostApplication.InDesign]: hangule_message,
      [HostApplication.AfterEffects]: hangule_message,
    };
  }

  async createPreset(content: string, hostApp: HostApplication) {
    const chatCompletionMessageParam: ChatCompletionMessageParam = {
      role: 'user',
      content: content,
    };

    const messages = [...this.messageMap[hostApp], chatCompletionMessageParam];
    const response = await this.openai.chat.completions.create({
      model: 'gpt-3.5-turbo-1106',
      messages: messages,
      temperature: 1,
      max_tokens: 4095,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    const prompt = response.choices[0].message.content;
    return prompt;
  }

  getHello() {
    return 'hello';
  }
}
