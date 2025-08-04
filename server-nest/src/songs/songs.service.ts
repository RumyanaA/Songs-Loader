/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import * as readline from 'readline';
import { ReadStream } from 'fs';
import { FileService } from '../file/file.service';
import { Song } from './songs.interfaces';



@Injectable()
export class SongsService {
  constructor(private fileService: FileService) { }

  private cachedSongs: Song[] = [];
  private songsFileName: string = 'songs.csv'

  async getSongsToJson() {
    const stream: ReadStream = this.fileService.getFile(this.songsFileName)
    const rl = readline.createInterface({
      input: stream,
      crlfDelay: Infinity, // recognize all instances of CR LF
    });
    const songs: Song[] = [];

    let keys: string[] = []
    let isFirstLine = true
    for await (const line of rl) {
      if (isFirstLine) {
        keys = line.split(',')
        isFirstLine = false
        continue;
      }
      const songValues = line.split(',')
      if (songValues.length < 2) {
        continue;;
      }
      const song = {}
      songValues.forEach((item: string, index: number) => {
        song[keys[index]] = item;
      });
      songs.push(song);
    }
    this.cachedSongs = songs
    return JSON.stringify(songs);
  }

  addSongToCsv(song: Song) {
    this.cachedSongs.push(song)
    const songValues = Object.values(song);
    let songToAppend = '\r\n';
    songValues.forEach((item, index) => {
      if (index === songValues.length - 1) {
        songToAppend += `${item}`;
        return;
      }
      songToAppend += `${item},`;
    });
    this.fileService.writeFile(this.songsFileName, songToAppend);
    return JSON.stringify(this.cachedSongs);
  }
}
