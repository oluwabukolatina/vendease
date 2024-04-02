import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { CharacterService } from "./character.service";
import { LocationService } from "../location/location.service";
import { EpisodeService } from "../episode/episode.service";
import { CHARACTER_REPOSITORY, LOCATION_REPOSITORY } from "../../../constants";

@Injectable()
export class CommonService {
  constructor(
    @Inject(CHARACTER_REPOSITORY)
    @Inject(LOCATION_REPOSITORY)
    @Inject(forwardRef(() => CharacterService))
    @Inject(forwardRef(() => LocationService))
    @Inject(forwardRef(() => EpisodeService))
    private characterService: CharacterService,
    private locationService: LocationService,
    private episodeService: EpisodeService,
  ) {}
}
