/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { SongsService } from './songs.service';
import { type SongDto } from './songs.interfaces';
import { UuidService } from 'nestjs-uuid';

@Controller('')
export class SongsController {
    constructor(private readonly songsService: SongsService, private readonly uuidService: UuidService) { }

    @Get('songs')
    async getSongs(): Promise<string> {
        return await this.songsService.getSongsToJson();
    }

    @Post('song')
    addSong(@Body() addSongDto: SongDto): string {
        const song = {
            id: this.uuidService.generate(),
            ...addSongDto
        }
        return this.songsService.addSongToCsv(song);
    }
}
