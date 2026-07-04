import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// field names that should have their paths turned into full urls
const IMAGE_KEYS = new Set(['image', 'thumbnail', 'icon', 'profileImage', 'video']);

@Injectable()
export class ImageUrlInterceptor implements NestInterceptor {
  constructor(private readonly configService: ConfigService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((responseData) => this.processValue(responseData)),
    );
  }

  private processValue(val: any, visited: WeakSet<object> = new WeakSet()): any {
    if (val === null || val === undefined || typeof val !== 'object' || val instanceof Date) {
      return val;
    }

    // avoid circular references
    if (visited.has(val)) return val;
    visited.add(val);

    if (Array.isArray(val)) {
      for (const item of val) {
        this.processValue(item, visited);
      }
      return val;
    }

    // go through each key and check if it needs url conversion
    for (const key of Object.keys(val)) {
      const fieldVal = val[key];
      if (typeof fieldVal === 'string' && IMAGE_KEYS.has(key)) {
        val[key] = this.makeFullUrl(fieldVal);
      } else if (fieldVal && typeof fieldVal === 'object') {
        this.processValue(fieldVal, visited);
      }
    }
    return val;
  }

  private makeFullUrl(path: string): string {
    if (!path || /^https?:\/\//i.test(path)) {
      return path;
    }
    const baseUrl = this.configService.getOrThrow<string>('BASE_URL');
    // clean up the path a bit
    const cleanPath = path.replace(/\\/g, '/').replace(/^\.?\//, '');
    return `${baseUrl}/${cleanPath}`;
  }
}
