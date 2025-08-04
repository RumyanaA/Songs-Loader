/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import path from 'node:path';
import * as fs from 'fs';

@Injectable()
export class FileService {
    private readonly basePath = path.join(process.cwd(), 'src', 'files');
    getFile(fileName: string): fs.ReadStream {
        const filePath = path.join(this.basePath, fileName);
        return fs.createReadStream(filePath);
    }

    writeFile(fileName: string, song: string) {
        const filePath = path.join(this.basePath, fileName);
        fs.appendFile(filePath, song, (err) => {
            if (err) throw err;

        });
    }
}
