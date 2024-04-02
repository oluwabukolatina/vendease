import {
  IsAlpha,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateLocationDto {
  @IsNotEmpty()
  @IsString()
  @IsAlpha()
  @MinLength(1)
  readonly name: string;
  @IsNotEmpty()

  @MinLength(1)
  readonly latitude: string;
  @IsNotEmpty()

  @MinLength(1)
  readonly longitude: string;

  // @IsNotEmpty()
  // @IsString()
  // readonly lastName: string;
  //
  // @IsNotEmpty()
  // @IsString()
  // @IsNotEmpty()
  // @Matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/g)
  // readonly email: string;
  //
  // @IsNotEmpty()
  // @IsString()
  // @Matches(/^[6789]\d{9}$/)
  // readonly phoneNumber: string;
  //
  // @IsNotEmpty()
  // @IsString()
  // @MinLength(3)
  // readonly companyName: string;
  //
  // @IsEnum(UserState)
  // readonly userState: UserState;
}
