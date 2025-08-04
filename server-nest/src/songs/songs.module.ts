import { Module } from '@nestjs/common';
import { SongsService } from './songs.service';
import { SongsController } from './songs.controller';
import { FileModule } from 'src/file/file.module';
import { UuidModule } from 'nestjs-uuid';

@Module({
  imports: [FileModule, UuidModule],
  providers: [SongsService],
  controllers: [SongsController],
})
export class SongsModule {}
