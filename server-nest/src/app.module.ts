import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { FileService } from './file/file.service';
import { FileModule } from './file/file.module';

@Module({
  imports: [SongsModule, FileModule],
  controllers: [AppController],
  providers: [AppService, FileService],
})
export class AppModule {}
