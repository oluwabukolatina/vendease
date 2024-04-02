import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Episode } from './episode/episode.model';

@Table
// export class Comment extends Model<Comment> {
//   @Column
//   comment: string;
//
//   @Column
//   ipAddressLocation: string;
//
//   @ForeignKey(() => Episode)
//   @Column
//   episodeId: number;
//
//   @Column({
//     // type: 'datetime'
//     type: DataType.DATE,
//     allowNull: false,
//   })
//
//   createdAt: Date;
// }
export class Comment extends Model<Comment> {
  @Column({ type: DataType.STRING({ length: 250 }), allowNull: false })
  comment: string;

  @Column({ type: DataType.STRING, allowNull: false })
  ip_address_location: string;

  @ForeignKey(() => Episode)
  @Column({ type: DataType.INTEGER }) // Assuming Episode ID is of type INTEGER
  episodeId: number;

  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  created_at: Date;
}
