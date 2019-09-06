import { Colecao } from "./colecoes/colecao.entity";
import { Module } from "@nestjs/common";
import { TaxonomiasController } from "./taxonomias/taxonomias.controller";
import { TaxonomiasService } from "./taxonomias/taxonomias.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EspecimesController } from "./especimes/especimes.controller";
import { EspecimesService } from "./especimes/especimes.service";
import { Especime } from "./especimes/especime.entity";
import { ColecoesController } from "./colecoes/colecoes.controller";
import { ColecoesService } from "./colecoes/colecoes.service";
import {
    Reino,
    Filo,
    Classe,
    Ordem,
    Familia,
    Subfamilia,
    Supertribo,
    Tribo,
    Subtribo,
    Genero,
    Subgenero,
    Especie,
} from "./taxonomias/taxonomia.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Reino,
            Filo,
            Classe,
            Ordem,
            Familia,
            Subfamilia,
            Supertribo,
            Tribo,
            Subtribo,
            Genero,
            Subgenero,
            Especie,
            Especime,
            Colecao,
        ]),
    ],
    controllers: [TaxonomiasController, EspecimesController, ColecoesController],
    providers: [TaxonomiasService, EspecimesService, ColecoesService],
})
export class TaxonomiasModule {}
