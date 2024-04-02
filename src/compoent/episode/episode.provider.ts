import { EPISODE_REPOSITORY } from '../../../constants';
import { Episode } from './episode.model';

export const episodeProvider = [
  {
    provide: EPISODE_REPOSITORY,
    useValue: Episode,
  },
];
