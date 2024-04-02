import {
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Character } from '../character/character.model';
import { CharacterEpisode } from '../character-episode.model';
import { Comment } from '../comment.model';

@Table
export class Episode extends Model<Episode> {
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.DATE, allowNull: false })
  release_date: Date;

  @Column({ type: DataType.STRING, allowNull: false })
  episode_code: string;

  @BelongsToMany(() => Character, () => CharacterEpisode)
  characters: Character[];

  @HasMany(() => Comment)
  episode_comments: Comment[];

  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  created_at: Date;

  // @ForeignKey(() => Character)
  // @Column({ type: DataType.INTEGER }) // Assuming Character ID is of type INTEGER
  // characterId: number;
}
