export type DropdownItem = {
  id: number;
  name: string;
};

export type genre = {
  id: number;
  name: string;
};

export type production = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

export type country = {
  iso_3166_1: string;
  name: string;
};

export type language = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

export type creator = {
  id: number;
  credit_id: string;
  name: string;
  gender: number;
  profile_path: string;
};

export type episode = {
  id: number;
  name: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  air_date: string;
  episode_number: number;
  production_code: number;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string;
};

export type season = {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
  vote_average: number;
};

export type media = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  imdb_id?: string;
  title?: string;
  original_title?: string;
  name?: string;
  original_name?: string;
  genres?: genre[];
  quality?: string;
  media_type?: string;
  release_date?: string;
  first_air_date?: string;
  origin_country?: string[];
  homepage?: string;
  production_companies?: production[];
  production_countries?: country[];
  revenue?: number;
  runtime?: number;
  spoken_languages?: language[];
  status?: string;
  tagline?: string;
  created_by?: creator[];
  episode_run_time?: number[];
  in_production?: boolean;
  last_episode_to_air?: episode;
  next_episonde_to_air?: episode | null;
  networks: production[];
  number_of_episodes: number;
  number_of_seasons: number;
  seasons: season[];
  type?: string;
};
export type medias = media[];
export type data = {
  data: media[];
  totalPages: number;
}