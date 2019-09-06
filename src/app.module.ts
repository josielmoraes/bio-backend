import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PessoasModule } from "./pessoas/pessoas.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EnderecosModule } from "./enderecos/enderecos.module";
import { LocalidadesModule } from "./localidades/localidades.module";
import { InstituicoesModule } from "./instituicoes/instituicoes.module";
import { TaxonomiasModule } from "./taxonomias/taxonomias.module";
import { RegistrosModule } from "./registros/registros.module";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: "postgres",
            host: "localhost", //192.168.74.85
            port: 5432,
            username: "postgres",
            password: "jlm12345",
            database: "bio",
            entities: [__dirname + "/**/*.entity{.ts,.js}"],
            synchronize: false,
        }),
        PessoasModule,
        EnderecosModule,
        LocalidadesModule,
        InstituicoesModule,
        TaxonomiasModule,
        RegistrosModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
