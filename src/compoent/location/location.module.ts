import {  Module } from '@nestjs/common';
import { SharedModule } from '../shared.module';
import { LocationController } from './location.controller';
import { LocationService } from './location.service';
import { locationProvider } from './location.provider';

@Module({
  imports: [SharedModule],
  controllers: [LocationController],
  exports: [LocationService],
  providers: [LocationService, ...locationProvider],
})
export class LocationModule {}
