import { diskStorage } from 'multer';
import * as fs from 'fs';
import { BadRequestException } from '@nestjs/common';

function determineFolder(mime: string): string {
  if (mime.startsWith('image/')) {
    return 'image';
  } else if (mime === 'application/pdf') {
    return 'document';
  }
  return 'file';
}

export const storageOptions = diskStorage({
  destination: (req, file, cb) => {
    const subFolder = determineFolder(file.mimetype);
    const dest = `./uploads/${subFolder}`;
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    cb(null, dest);
  },
  filename: (req, file, cb) => {
    const ext = file.originalname.split('.').pop();
    if (!ext) {
      return cb(new BadRequestException('Filename extension is missing'), '');
    }
    const folderType = determineFolder(file.mimetype);
    const uniqName = `${folderType}_${Date.now()}.${ext}`;
    return cb(null, uniqName);
  },
});
