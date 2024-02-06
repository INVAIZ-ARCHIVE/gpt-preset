import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';
import { ChatCompletionMessageParam } from 'openai/resources';
import { Device, HostApplication } from './dto/create-preset.dto';
import w_grid10_message_map from '../constants/Grid10';
import Grid10MessageMap from '../constants/Grid10';

export enum MessageMap {
  PremierePro = 'Premiere Pro',
  Illustrator = 'Illustrator',
  LightroomClassic = 'Lightroom Classic',
  Hangeul = 'Hangeul',
}

@Injectable()
export class GptService {
  private readonly openai: OpenAI;
  private messageMap: Record<HostApplication, any[]>;
  constructor(private readonly configService: ConfigService) {
    this.openai = new OpenAI({
      apiKey: this.configService.get('OPENAI_API_KEY'),
    });
  }

  async createPreset(
    content: string,
    hostApp: HostApplication,
    device: Device,
  ) {
    const chatCompletionMessageParam: ChatCompletionMessageParam = {
      role: 'user',
      content: content,
    };

    this.messageMap = Grid10MessageMap['windows'];
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
