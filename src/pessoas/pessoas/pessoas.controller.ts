import { PessoasService } from "./pessoas.service";
import { Controller, Get, Post, Put, Delete, Body, Param } from "@nestjs/common";
import { Pessoa } from "./pessoa.entity";

@Controller("pessoas")
export class PessoasController {
    public constructor(private pessoasService: PessoasService) {}

    @Get()
    public index(): Promise<Pessoa[]> {
        return this.pessoasService.findAll();
    }

    @Post("create")
    public async create(@Body() pessoaData: Pessoa): Promise<any> {
        console.log(pessoaData);
        return this.pessoasService.create(pessoaData);
    }

    @Put(":id/update")
    public async update(@Param("id") id, @Body() pessoaData: Pessoa): Promise<any> {
        pessoaData.id = Number(id);
        return this.pessoasService.update(pessoaData);
    }
    @Delete(":id/delete")
    public async delete(@Param("id") id): Promise<any> {
        return this.pessoasService.delete(id);
    }
}
