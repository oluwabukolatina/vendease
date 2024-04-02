import {  Module } from '@nestjs/common';
import { CharacterModule } from './character/character.module';
import { EpisodeModule } from './episode/episode.module';
import { LocationModule } from "./location/location.module";
@Module({
  imports: [
    LocationModule,
    CharacterModule,
    EpisodeModule
  ]
  ,
  exports: [
    LocationModule,
    CharacterModule,
    EpisodeModule
  ]
  ,
})
export class SharedModule {}
