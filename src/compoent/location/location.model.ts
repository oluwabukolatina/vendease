import { Character } from '../character/character.model';
import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';

// @Table
// export class Location extends Model<Location> {
//
//   @Column({ type: DataType.STRING, allowNull: false })
//   name: string;
//   @Column({ type: DataType.STRING, allowNull: false })
//
//   latitude: string;
//   @Column({ type: 'double' })
//   longitude: string;
//   @Column({ type: DataType.DATE, allowNull: false, defaultValue: DataType.NOW })
//   createdAt: Date;
//
//
//
//   // Define association with Character model
//   @ForeignKey(() => Character)
//   @Column({ type: DataType.INTEGER }) // Assuming Character ID is of type INTEGER
//   characterId: number;
//
//   @BelongsTo(() => Character)
//   character: Character;
// }

// @Table({ tableName: 'Locations' })

@Table
export class Location extends Model<Location> {
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.DECIMAL, allowNull: false })
  latitude: number;

  @Column({ type: DataType.DECIMAL, allowNull: false })
  longitude: number;

  @HasMany(() => Character)
  characters: Character[];

  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  created_at: Date; // Define the created_at column with default value
}
