import { IsEnum, IsInt, IsNotEmpty } from 'class-validator';

enum CharacterStatus {
  ACTIVE = 'ACTIVE',
  DEAD = 'DEAD',
  UNKNOWN = 'UNKNOWN',
}

enum CharacterGender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

export class CharacterDto {
  readonly episodes: string;
  readonly first_name: string;
  readonly gender: string;
  readonly last_name: string;
  readonly status: string;
  readonly created_at: string;
}
export class CreateCharacterDto {
  readonly episodes: number[];
  @IsNotEmpty()
  readonly first_name: string;
  @IsNotEmpty()
  @IsEnum(CharacterGender, {
    message: 'gender must be either MALE or FEMALE',
  })
  readonly gender: CharacterGender;

  @IsEnum(CharacterStatus, {
    message: 'gender must be either ACTIVE OR DEAD or UNKNOWN',
  })
  readonly status: CharacterStatus;
  @IsNotEmpty()
  readonly last_name: string;
  readonly state_of_origin: string;
  @IsNotEmpty()
  created_at: string; //datetime
  @IsNotEmpty()
  @IsInt()
  locationId: number;
}
