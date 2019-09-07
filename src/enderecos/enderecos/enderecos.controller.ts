import { Controller, Get, Post, Put, Delete, Body, Param } from "@nestjs/common";
import { EnderecosService } from "./enderecos.service";
import { Endereco } from "./endereco.entity";

@Controller("enderecos")
export class EnderecosController {
    public constructor(private enderecoService: EnderecosService) {}
    @Get()
    public index(): Promise<Endereco[]> {
        return this.enderecoService.findAll();
    }

    @Post("create")
    public async create(@Body() enderecoData: Endereco): Promise<any> {
        return this.enderecoService.create(enderecoData);
    }

    @Put(":id/update")
    public async update(@Param("id") id, @Body() enderecoData: Endereco): Promise<any> {
        enderecoData.id = Number(id);
        return this.enderecoService.update(enderecoData);
    }
    @Delete(":id/delete")
    public async delete(@Param("id") id): Promise<any> {
        return this.enderecoService.delete(id);
    }
}
