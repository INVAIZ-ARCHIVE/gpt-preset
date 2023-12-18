import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';
import { ChatCompletionMessageParam } from 'openai/resources';
import { PREMIERE_PRO } from '../constants/message';
import { HostApplication } from './dto/create-preset.dto';

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
        messages = [...PREMIERE_PRO].concat(newState);
        break;
      case 'Photoshop':
        messages = [...PREMIERE_PRO].concat(newState);
        break;
      case 'Lightroom Classic':
        messages = [...PREMIERE_PRO].concat(newState);
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
