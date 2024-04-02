// @Table
// export class Character extends Model<Character> {
//   @Column
//   first_name: string;
//   @Column
//   last_name: string;
//   @Default('Active')
//   @Column(DataType.ENUM('Active', 'Dead', 'Unknown'))
//   status: 'Active' | 'Dead' | 'Unknown';
//   @Column({
//     type: DataType.ENUM,
//     values: ['Male', 'Female'],
//     allowNull: false,
//   })
//   gender: string;
//   @ForeignKey(() => Location)
//   @Column({ type: DataType.INTEGER }) // Assuming Location ID is of type INTEGER
//   locationId: number;
//   @BelongsTo(() => Location)
//   location: Location;
//   @HasMany(() => Episode)
//   episodes: Episode[];
//
//
//   @Column({ type: DataType.DATE, allowNull: false, defaultValue: DataType.NOW })
//   created_at: Date;
//
//
//
//   // @BelongsToMany(() => Episode, () => CharacterEpisode)
//   // episodes: Episode[];
// }

// @Table({ tableName: 'Characters' })
import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Location } from '../location/location.model';
import { Episode } from '../episode/episode.model';
import { EpisodeCharacter } from '../episode-character.model';

@Table
export class Character extends Model<Character> {
  @Column({ type: DataType.STRING, allowNull: false })
  first_name: string;

  @Column({ type: DataType.STRING, allowNull: false })
  last_name: string;

  @Column({
    type: DataType.ENUM('ACTIVE', 'DEAD', 'UNKNOWN'),
    allowNull: false,
  })
  status: 'ACTIVE' | 'DEAD' | 'UNKNOWN';

  @Column({ type: DataType.STRING, allowNull: true })
  state_of_origin: string;

  @Column({ type: DataType.ENUM('MALE', 'FEMALE'), allowNull: false })
  gender: 'MALE' | 'FEMALE';

  @BelongsTo(() => Location)
  location: Location;

  // @HasMany(() => Episode)
  // episodes: Episode[];
  @BelongsToMany(() => Episode, () => EpisodeCharacter)
  episodes: Episode[];

  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  created_at: Date;

  @ForeignKey(() => Location)
  @Column({ type: DataType.INTEGER }) // Assuming Location ID is of type INTEGER
  locationId: number;
}
