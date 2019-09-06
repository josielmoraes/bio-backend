import { Module } from "@nestjs/common";
import { InstituicoesController } from "./instituicoes/instituicoes.controller";
import { InstituicoesService } from "./instituicoes/instituicoes.service";
import { Instituicao } from "./instituicoes/instituicao.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([Instituicao])],
    controllers: [InstituicoesController],
    providers: [InstituicoesService],
})
export class InstituicoesModule {}
