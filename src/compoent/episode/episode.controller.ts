import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { EpisodeService } from './episode.service';
import { CreateEpisodeDto } from './episode-dto';
import { Episode } from './episode.model';

@Controller('episode')
export class EpisodeController {
  constructor(private readonly episodeService: EpisodeService) {}
  @Post()
  create(@Body() data: CreateEpisodeDto): Promise<Episode> {
    return this.episodeService.create(data);
  }

  @Get()
  findAll(): Promise<Episode[]> {
    return this.episodeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Episode> {
    return this.episodeService.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data): Promise<[number, Episode[]]> {
    return this.episodeService.update(Number(id), data);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<number> {
    return this.episodeService.remove(Number(id));
  }
}
