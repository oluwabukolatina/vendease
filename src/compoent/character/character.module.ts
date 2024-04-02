import { Module } from '@nestjs/common';
import { CharacterController } from './character.controller';
import { CharacterService } from './character.service';
import { SharedModule } from '../shared.module';
import { characterProvider } from "./character.provider";
@Module({
  imports: [SharedModule],
  controllers: [CharacterController],
  exports: [CharacterService],
  providers: [CharacterService, ...characterProvider],
})
export class CharacterModule {}
