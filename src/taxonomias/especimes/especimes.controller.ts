import { Registro } from "./../../registros/registros/registro.entity";
import { EspecimesService } from "./especimes.service";
import { Controller, Get, Post, Put, Delete, Body, Param } from "@nestjs/common";
import { Especime } from "./especime.entity";

@Controller("especimes")
export class EspecimesController {
    public constructor(private especimeService: EspecimesService) {}

    @Get()
    public index(): Promise<Especime[]> {
        return this.especimeService.findAll();
    }

    @Post("create")
    public async create(@Body() data: Especime): Promise<any> {
        return this.especimeService.create(data);
    }

    @Put(":id/update")
    public async update(@Param("id") id, @Body() data: Especime): Promise<any> {
        data.id = Number(id);
        return this.especimeService.update(data);
    }
    @Delete(":id/delete")
    public async delete(@Param("id") id): Promise<any> {
        return this.especimeService.delete(id);
    }
}
