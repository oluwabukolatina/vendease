import { IsNotEmpty } from 'class-validator';

export class EpisodeDto {
  readonly episodes: string;
  readonly first_name: string;
  readonly gender: string;
  readonly last_name: string;
  readonly status: string;
  readonly created_at: string;
}
export class CreateEpisodeDto {
  readonly character: string;
  @IsNotEmpty()
  readonly name: string;
  @IsNotEmpty()
  readonly episode_code: string;
  @IsNotEmpty()
  readonly release_date: string;
  readonly episode_comments: string;
  readonly created_at: string;
}
