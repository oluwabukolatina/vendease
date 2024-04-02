import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../../constants';
import { databaseConfig } from './database.config';
import { Character } from '../compoent/character/character.model';
import { Location } from '../compoent/location/location.model';
import { Episode } from '../compoent/episode/episode.model';
import { CharacterEpisode } from '../compoent/character-episode.model';
import { Comment } from '../compoent/comment.model';
import { EpisodeCharacter } from "../compoent/episode-character.model";

export const databaseProvider = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      console.log(process.env.NODE_ENV);
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        case TEST:
          config = databaseConfig.test;
          break;
        case PRODUCTION:
          config = databaseConfig.production;
          break;
        default:
          config = databaseConfig.development;
      }
      const sequelize = new Sequelize(config);
      sequelize.addModels([
        Character,
        Location,
        Episode,
        CharacterEpisode,
        Comment,
        EpisodeCharacter
      ]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
