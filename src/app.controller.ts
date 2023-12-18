import { Body, Controller, Get, Post } from '@nestjs/common';
import { GptService } from './gpt/gpt.service';

@Controller()
export class AppController {
  constructor(private readonly gptService: GptService) {}

  @Post()
  createPreset(@Body() body) {
    return this.gptService.createPreset(body.user_input, body.hostApplication);
  }
}
