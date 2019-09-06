import { Controller, Get, Post, Put, Delete, Body, Param } from "@nestjs/common";
import { LocalidadesService } from "./localidades.service";
import { Localidade } from "./localidade.entity";

@Controller("localidades")
export class LocalidadesController {
    public constructor(private localidadeService: LocalidadesService) {}

    @Get()
    public index(): Promise<Localidade[]> {
        return this.localidadeService.findAll();
    }

    @Post("create")
    public async create(@Body() localidadeData: Localidade): Promise<any> {
        return this.localidadeService.create(localidadeData);
    }

    @Put(":id/update")
    public async update(@Param("id") id, @Body() localidadeData: Localidade): Promise<any> {
        localidadeData.id_localidade = Number(id);
        return this.localidadeService.update(localidadeData);
    }
    @Delete(":id/delete")
    public async delete(@Param("id") id): Promise<any> {
        return this.localidadeService.delete(id);
    }
}
