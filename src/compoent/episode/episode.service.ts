import { Inject, Injectable } from "@nestjs/common";
import { EPISODE_REPOSITORY } from "../../../constants";
import { Episode } from "./episode.model";
import { CharacterService } from "../character/character.service";

@Injectable()
export class EpisodeService {
  constructor(
    @Inject(EPISODE_REPOSITORY)
    private readonly episodeRepository: typeof Episode,


    // private readonly characterService: CharacterService,
  ) {}

  async create(data): Promise<Episode> {
    // if (data.characters && data.characters.length > 0) {
    //   const existingEpisodes = await this.characterService.findAll({
    //     where: { id: data.episodes },
    //   });
    //   console.log(existingEpisodes, 'existingEpisodes');
    //   const existingEpisodeIds = existingEpisodes.map((episode) => episode.id);
    //   const missingEpisodeIds = data.episodes.filter(
    //     (episodeId) => !existingEpisodeIds.includes(episodeId),
    //   );
    //   if (missingEpisodeIds.length > 0) {
    //     throw new NotFoundException(
    //       `Episodes not found: ${missingEpisodeIds.join(', ')}`,
    //     );
    //   }
    // }
    const episode = new Episode(data);
    return episode.save();
  }

  async findAll(filterOptions?: any): Promise<Episode[]> {
    if (filterOptions) {
      // If filter options are provided, apply them to the query
      return this.episodeRepository.findAll(filterOptions);
    }
    return this.episodeRepository.findAll();
  }

  async findOne(id: number): Promise<Episode> {
    return this.episodeRepository.findOne({ where: { id } });
  }

  async update(id: number, data): Promise<[number, Episode[]]> {
    const [affectedCount, affectedRows] = await this.episodeRepository.update(
      data,
      {
        where: { id },
        returning: true,
      },
    );
    return [affectedCount, affectedRows as Episode[]];
  }

  async remove(id: number): Promise<number> {
    return this.episodeRepository.destroy({ where: { id } });
  }
}
