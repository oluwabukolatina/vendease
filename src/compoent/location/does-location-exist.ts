import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { LocationService } from "./location.service";

@Injectable()
export class DoesLocationExist implements CanActivate {
  constructor(private readonly locationService: LocationService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const { locationId } = request.body; // Assuming locationId is passed in the request body
    // Check if location exists in the database
    const locationExist = await this.locationService.findOne(locationId);

    return !!locationExist; // Return true if location exists, otherwise return false
  }
}
