import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Episode } from './episode/episode.model';
import { Character } from './character/character.model';

@Table
export class EpisodeCharacter extends Model<EpisodeCharacter> {
  @ForeignKey(() => Episode)
  @Column
  episodeId: number;

  @ForeignKey(() => Character)
  @Column
  characterId: number;
}
