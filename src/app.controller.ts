import { Body, Controller, Get, Post } from '@nestjs/common';
import { GptService } from './gpt/gpt.service';
import { CreatePresetDto } from './gpt/dto/create-preset.dto';

@Controller()
export class AppController {
  constructor(private readonly gptService: GptService) {}

  @Post()
  createPreset(@Body() createPresetDto: CreatePresetDto) {
    return this.gptService.createPreset(
      createPresetDto.content,
      createPresetDto.hostApp,
      createPresetDto.device,
    );
  }
}
