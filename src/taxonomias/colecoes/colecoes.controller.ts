import { Colecao } from "./colecao.entity";
import { ColecoesService } from "./colecoes.service";
import { Controller, Get, Post, Put, Delete, Body, Param } from "@nestjs/common";

@Controller("colecoes")
export class ColecoesController {
    public constructor(private colecaoService: ColecoesService) {}

    @Get()
    public index(): Promise<Colecao[]> {
        return this.colecaoService.findAll();
    }

    @Post("create")
    public async create(@Body() instituicaoData: Colecao): Promise<any> {
        return this.colecaoService.create(instituicaoData);
    }

    @Put(":id/update")
    public async update(@Param("id") id, @Body() data: Colecao): Promise<any> {
        data.id_colecao = Number(id);
        return this.colecaoService.update(data);
    }
    @Delete(":id/delete")
    public async delete(@Param("id") id): Promise<any> {
        return this.colecaoService.delete(id);
    }
}
