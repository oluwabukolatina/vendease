import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CharacterService } from './character.service';
import { LocationService } from '../location/location.service';
import { CreateCharacterDto } from './character-dto';
import { Character } from './character.model';

@Controller('character')
export class CharacterController {
  constructor(
    private readonly characterService: CharacterService,
    private locationService: LocationService,
  ) {}

  @Post()
  async create(@Body() data: CreateCharacterDto): Promise<Character> {
    await this.locationService.doesLocationExist(data.locationId);
    return this.characterService.create(data);
  }

  @Get()
  findAll(): Promise<Character[]> {
    return this.characterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Character> {
    return this.characterService.findOne(Number(id));
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() data,
  ): Promise<[number, Character[]]> {
    return this.characterService.update(Number(id), data);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<number> {
    return this.characterService.remove(Number(id));
  }
}
