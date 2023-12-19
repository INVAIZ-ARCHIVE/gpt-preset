import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';
import { ChatCompletionMessageParam } from 'openai/resources';
import { premiere_messages } from '../constants/premiere-pro';
import { HostApplication } from './dto/create-preset.dto';
import { illustrator_messages } from 'src/constants/illustrator';
import { lightroom_messages } from './../constants/lightroom-classic';

@Injectable()
export class GptService {
  private readonly openai: OpenAI;
  constructor(private readonly configService: ConfigService) {
    this.openai = new OpenAI({
      apiKey: this.configService.get('OPENAI_API_KEY'),
    });
  }

  async createPreset(content: string, hostApp: HostApplication) {
    const newState: ChatCompletionMessageParam = {
      role: 'user',
      content: content,
    };

    let messages = [];

    switch (hostApp) {
      case 'Premiere Pro':
        messages = [...premiere_messages].concat(newState);
        break;
      case 'Illustrator':
        messages = [...illustrator_messages].concat(newState);
        break;
      case 'Lightroom Classic':
        messages = [...lightroom_messages].concat(newState);
        break;
    }

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
