import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Character } from './character/character.model';
import { Episode } from './episode/episode.model';

@Table
export class CharacterEpisode extends Model<CharacterEpisode> {
  @ForeignKey(() => Character)
  @Column
  characterId: number;

  @ForeignKey(() => Episode)
  @Column
  episodeId: number;
}
