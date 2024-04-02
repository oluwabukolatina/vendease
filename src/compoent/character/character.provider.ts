import { CHARACTER_REPOSITORY } from "../../../constants";
import { Character } from "./character.model";

export const characterProvider = [
  {
    provide: CHARACTER_REPOSITORY,
    useValue: Character,
  },
];
