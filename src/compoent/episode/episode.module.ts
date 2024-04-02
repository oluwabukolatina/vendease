import { Module } from '@nestjs/common';
import { EpisodeController } from './episode.controller';
import { EpisodeService } from './episode.service';
import { SharedModule } from '../shared.module';
import { episodeProvider } from './episode.provider';

@Module({
  controllers: [EpisodeController],
  exports: [EpisodeService],
  imports: [SharedModule],
  providers: [EpisodeService, ...episodeProvider],
})
export class EpisodeModule {}
