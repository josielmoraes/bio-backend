import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

async function bootstrap(): Promise<any> {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix("api");
    const options = new DocumentBuilder()
        .setTitle("BIO")
        .setBasePath("api")
        .setVersion("1.0")
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup("v1", app, document);
    await app.listen(3000);
}
bootstrap();
