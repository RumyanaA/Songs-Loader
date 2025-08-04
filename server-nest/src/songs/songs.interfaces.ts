export interface Song {
  [key: string]: string;
}

export interface SongDto {
  id?: string;
  name: string;
  artist: string;
  genre: string;
}
