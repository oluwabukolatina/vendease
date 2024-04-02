import { Inject, Injectable } from "@nestjs/common";
import { CHARACTER_REPOSITORY, EPISODE_REPOSITORY } from "../../../constants";
import { Character } from "./character.model";
import { EpisodeService } from "../episode/episode.service";
import { NotFoundException } from "../../exception/not-found-exception";

@Injectable()
export class CharacterService {
  constructor(
    @Inject(CHARACTER_REPOSITORY)
    private readonly characterRepository: typeof Character,


    private readonly episodeService: EpisodeService,

  ) {}

  async create(data): Promise<Character> {
    if (data.episodes && data.episodes.length > 0) {
      const existingEpisodes = await this.episodeService.findAll({
        where: { id: data.episodes },
      });
      const existingEpisodeIds = existingEpisodes.map((episode) => episode.id);
      const missingEpisodeIds = data.episodes.filter(
        (episodeId) => !existingEpisodeIds.includes(episodeId),
      );
      if (missingEpisodeIds.length > 0) {
        throw new NotFoundException(
          `Episodes not found: ${missingEpisodeIds.join(', ')}`,
        );
      }
    }
    const character = new Character(data);
    return await character.save();
  }

  async findAll(filterOptions?: any): Promise<Character[]> {
    if (filterOptions) {
      return this.characterRepository.findAll(filterOptions);
    }
    return this.characterRepository.findAll();
  }

  async findOne(id: number): Promise<Character> {
    return this.characterRepository.findOne({ where: { id } });
  }

  async update(id: number, data): Promise<[number, Character[]]> {
    const [affectedCount, affectedRows] = await this.characterRepository.update(
      data,
      {
        where: { id },
        returning: true,
      },
    );
    return [affectedCount, affectedRows as Character[]];
  }

  async remove(id: number): Promise<number> {
    return this.characterRepository.destroy({ where: { id } });
  }
}
