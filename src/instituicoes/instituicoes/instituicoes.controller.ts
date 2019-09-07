import { InstituicoesService } from "./instituicoes.service";
import { Controller, Get, Post, Put, Delete, Body, Param } from "@nestjs/common";
import { Instituicao } from "./instituicao.entity";

@Controller("instituicoes")
export class InstituicoesController {
    public constructor(private instituicaoService: InstituicoesService) {}

    @Get()
    public index(): Promise<Instituicao[]> {
        return this.instituicaoService.findAll();
    }

    @Post("create")
    public async create(@Body() instituicaoData: Instituicao): Promise<any> {
        return this.instituicaoService.create(instituicaoData);
    }

    @Put(":id/update")
    public async update(@Param("id") id, @Body() instituicaoData: Instituicao): Promise<any> {
        instituicaoData.id = Number(id);
        return this.instituicaoService.update(instituicaoData);
    }
    @Delete(":id/delete")
    public async delete(@Param("id") id): Promise<any> {
        return this.instituicaoService.delete(id);
    }
}
