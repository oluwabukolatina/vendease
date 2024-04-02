import { Inject, Injectable } from '@nestjs/common';
import { LOCATION_REPOSITORY } from '../../../constants';
import { Location } from './location.model';
import { NotFoundException } from '../../exception/not-found-exception';

@Injectable()
export class LocationService {
  constructor(
    @Inject(LOCATION_REPOSITORY)
    private readonly locationRepository: typeof Location,
  ) {}

  async create(locationData): Promise<Location> {
    const location = new Location(locationData);
    return await location.save();
  }
  async doesLocationExist(locationId: number): Promise<Location> {
    const location = await this.locationRepository.findByPk(locationId);
    if (location) return location;
    throw new NotFoundException('Location not found'); // Throw custom NotFoundException
  }

  async findAll(): Promise<Location[]> {
    return this.locationRepository.findAll();
  }

  async findOne(id: number): Promise<Location> {
    return this.locationRepository.findOne({ where: { id } });
  }

  async update(id: number, locationData): Promise<[number, Location[]]> {
    const [affectedCount, affectedRows] = await this.locationRepository.update(
      locationData,
      {
        where: { id },
        returning: true,
      },
    );
    return [affectedCount, affectedRows as Location[]];
  }

  async remove(id: number): Promise<number> {
    return this.locationRepository.destroy({ where: { id } });
  }
}
