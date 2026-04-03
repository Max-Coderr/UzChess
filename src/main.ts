import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder ,SwaggerModule} from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const swaggerConfig = new DocumentBuilder()
    .setTitle("Uzchess APIs")
    .setVersion('1.0.0')
    .build()

  const swaggerDoc = SwaggerModule.createDocument(app,swaggerConfig)
  SwaggerModule.setup('/docs',app,swaggerDoc)
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
