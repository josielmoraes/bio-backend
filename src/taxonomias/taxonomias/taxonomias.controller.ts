import { TaxonomiasService } from "./taxonomias.service";
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
} from "./taxonomia.entity";
import { Controller, Get, Post, Put, Delete, Body, Param } from "@nestjs/common";

@Controller("taxonomias")
export class TaxonomiasController {
    public constructor(private taxonomiaService: TaxonomiasService) {}

    //REINO ROTAS
    @Get("reino")
    public reinoIndex(): Promise<Reino[]> {
        return this.taxonomiaService.reinoFindAll();
    }

    @Post("/reino/create")
    public async reinoCreate(@Body() data: Reino): Promise<any> {
        return this.taxonomiaService.reinoCreate(data);
    }

    @Put("reino/:id/update")
    public async reinoUpdate(@Param("id") id, @Body() data: Reino): Promise<any> {
        data.id_reino = Number(id);
        return this.taxonomiaService.reinoUpdate(data);
    }
    @Delete("reino/:id/delete")
    public async reinoDelete(@Param("id") id): Promise<any> {
        return this.taxonomiaService.reinoDelete(id);
    }

    //FILO ROTAS
    @Get("filo")
    public filoIndex(): Promise<Filo[]> {
        return this.taxonomiaService.filoFindAll();
    }

    @Post("/filo/create")
    public async filoCreate(@Body() data: Filo): Promise<any> {
        return this.taxonomiaService.filoCreate(data);
    }

    @Put("filo/:id/update")
    public async filoUpdate(@Param("id") id, @Body() data: Filo): Promise<any> {
        console.log(id);
        data.id_filo = Number(id);
        return this.taxonomiaService.filoUpdate(data);
    }
    @Delete("filo/:id/delete")
    public async filoDelete(@Param("id") id): Promise<any> {
        return this.taxonomiaService.filoDelete(id);
    }

    //CLASSE ROTAS
    @Get("classe")
    public classeIndex(): Promise<Classe[]> {
        return this.taxonomiaService.classeFindAll();
    }

    @Post("/classe/create")
    public async classeCreate(@Body() data: Classe): Promise<any> {
        return this.taxonomiaService.classeCreate(data);
    }

    @Put("classe/:id/update")
    public async classeUpdate(@Param("id") id, @Body() data: Classe): Promise<any> {
        data.id_classe = Number(id);
        return this.taxonomiaService.classeUpdate(data);
    }
    @Delete("classe/:id/delete")
    public async classeDelete(@Param("id") id): Promise<any> {
        return this.taxonomiaService.classeDelete(id);
    }

    //ORDEM ROTAS
    @Get("ordem")
    public ordemIndex(): Promise<Ordem[]> {
        return this.taxonomiaService.ordemFindAll();
    }

    @Post("/ordem/create")
    public async ordemCreate(@Body() data: Ordem): Promise<any> {
        return this.taxonomiaService.ordemCreate(data);
    }

    @Put("ordem/:id/update")
    public async ordemUpdate(@Param("id") id, @Body() data: Ordem): Promise<any> {
        data.id_ordem = Number(id);
        return this.taxonomiaService.ordemUpdate(data);
    }
    @Delete("ordem/:id/delete")
    public async ordemDelete(@Param("id") id): Promise<any> {
        return this.taxonomiaService.ordemDelete(id);
    }

    //FAMILIA ROTAS
    @Get("familia")
    public familiaIndex(): Promise<Familia[]> {
        return this.taxonomiaService.familiaFindAll();
    }

    @Post("familia/create")
    public async familiaCreate(@Body() data: Familia): Promise<any> {
        return this.taxonomiaService.familiaCreate(data);
    }

    @Put("familia/:id/update")
    public async familiaUpdate(@Param("id") id, @Body() data: Familia): Promise<any> {
        data.id_familia = Number(id);
        return this.taxonomiaService.familiaUpdate(data);
    }
    @Delete("familia/:id/delete")
    public async familiaDelete(@Param("id") id): Promise<any> {
        return this.taxonomiaService.familiaDelete(id);
    }

    //SUBFAMIALIA ROTAS
    @Get("subfamilia")
    public subFamiliaIndex(): Promise<Subfamilia[]> {
        return this.taxonomiaService.subFamiliaFindAll();
    }

    @Post("/subfamilia/create")
    public async subFamiliaCreate(@Body() data: Subfamilia): Promise<any> {
        return this.taxonomiaService.subFamiliaCreate(data);
    }

    @Put("subfamilia/:id/update")
    public async subfamiliaUpdate(@Param("id") id, @Body() data: Subfamilia): Promise<any> {
        data.id_subfamilia = Number(id);
        return this.taxonomiaService.subFamiliaUpdate(data);
    }
    @Delete("subfamilia/:id/delete")
    public async subfamiliaDelete(@Param("id") id): Promise<any> {
        return this.taxonomiaService.subFamiliaDelete(id);
    }

    //SUPERTRIBO ROTAS
    @Get("supertribo")
    public superTriboIndex(): Promise<Supertribo[]> {
        return this.taxonomiaService.superTriboFindAll();
    }

    @Post("/supertribo/create")
    public async superTriboCreate(@Body() data: Supertribo): Promise<any> {
        return this.taxonomiaService.superTriboCreate(data);
    }

    @Put("supertribo/:id/update")
    public async superTriboUpdate(@Param("id") id, @Body() data: Supertribo): Promise<any> {
        data.id_supertribo = Number(id);
        return this.taxonomiaService.superTriboUpdate(data);
    }
    @Delete("supertribo/:id/delete")
    public async superTriboDelete(@Param("id") id): Promise<any> {
        return this.taxonomiaService.superTriboDelete(id);
    }

    //TRIBO ROTAS
    @Get("tribo")
    public triboIndex(): Promise<Tribo[]> {
        return this.taxonomiaService.triboFindAll();
    }

    @Post("tribo/create")
    public async triboCreate(@Body() data: Tribo): Promise<any> {
        return this.taxonomiaService.triboCreate(data);
    }

    @Put("tribo/:id/update")
    public async triboUpdate(@Param("id") id, @Body() data: Tribo): Promise<any> {
        data.id_tribo = Number(id);
        return this.taxonomiaService.triboUpdate(data);
    }
    @Delete("tribo/:id/delete")
    public async triboDelete(@Param("id") id): Promise<any> {
        return this.taxonomiaService.triboDelete(id);
    }

    //SUBTRIBO ROTAS
    @Get("subtribo")
    public subTriboIndex(): Promise<Subtribo[]> {
        return this.taxonomiaService.subTriboFindAll();
    }

    @Post("/subtribo/create")
    public async subTriboCreate(@Body() data: Subtribo): Promise<any> {
        return this.taxonomiaService.subTriboCreate(data);
    }

    @Put("subtribo/:id/update")
    public async subTriboUpdate(@Param("id") id, @Body() data: Subtribo): Promise<any> {
        data.id_subtribo = Number(id);
        return this.taxonomiaService.subTriboUpdate(data);
    }
    @Delete("subtribo/:id/delete")
    public async subTriboDelete(@Param("id") id): Promise<any> {
        return this.taxonomiaService.subTriboDelete(id);
    }

    //GENERO ROTAS
    @Get("genero")
    public generoIndex(): Promise<Genero[]> {
        return this.taxonomiaService.generoFindAll();
    }

    @Post("genero/create")
    public async generoCreate(@Body() data: Genero): Promise<any> {
        return this.taxonomiaService.generoCreate(data);
    }

    @Put("genero/:id/update")
    public async generooUpdate(@Param("id") id, @Body() data: Genero): Promise<any> {
        data.id_genero = Number(id);
        return this.taxonomiaService.generoUpdate(data);
    }
    @Delete("genero/:id/delete")
    public async generoDelete(@Param("id") id): Promise<any> {
        return this.taxonomiaService.generoDelete(id);
    }

    //SUBGENERO ROTAS
    @Get("subgenero")
    public subGeneroIndex(): Promise<Subgenero[]> {
        console.log("asdasd");
        return this.taxonomiaService.subGeneroFindAll();
    }

    @Post("subgenero/create")
    public async subGeneroCreate(@Body() data: Subgenero): Promise<any> {
        return this.taxonomiaService.subGeneroCreate(data);
    }

    @Put("subgenero/:id/update")
    public async subGeneroUpdate(@Param("id") id, @Body() data: Subgenero): Promise<any> {
        data.id_subgenero = Number(id);
        return this.taxonomiaService.subGeneroUpdate(data);
    }
    @Delete("subgenero/:id/delete")
    public async subGeneroDelete(@Param("id") id): Promise<any> {
        return this.taxonomiaService.subGeneroDelete(id);
    }

    //ESPECIE ROTAS
    @Get("especie")
    public especieIndex(): Promise<Especie[]> {
        return this.taxonomiaService.especieFindAll();
    }

    @Post("especie/create")
    public async especieCreate(@Body() data: Especie): Promise<any> {
        return this.taxonomiaService.especieCreate(data);
    }

    @Put("especie/:id/update")
    public async especieUpdate(@Param("id") id, @Body() data: Especie): Promise<any> {
        data.id_especie = Number(id);
        return this.taxonomiaService.especieUpdate(data);
    }
    @Delete("especie/:id/delete")
    public asyncespecieDelete(@Param("id") id): Promise<any> {
        return this.taxonomiaService.especieDelete(id);
    }
}
