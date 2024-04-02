import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { LocationService } from './location.service';
import { Location } from './location.model';
import { CreateLocationDto } from "./create-location-dto";

@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}
  //todo check if location already exits
  @Post()
  create(@Body() locationData: CreateLocationDto): Promise<Location> {
    return this.locationService.create(locationData);
  }

  @Get()
  findAll(): Promise<Location[]> {
    return this.locationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Location> {
    return this.locationService.findOne(Number(id));
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() locationData,
  ): Promise<[number, Location[]]> {
    return this.locationService.update(Number(id), locationData);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<number> {
    return this.locationService.remove(Number(id));
  }
}
