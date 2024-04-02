import { LOCATION_REPOSITORY } from '../../../constants';
import { Location } from './location.model';

export const locationProvider = [
  {
    provide: LOCATION_REPOSITORY,
    useValue: Location,
  },
];
