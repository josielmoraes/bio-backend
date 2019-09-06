import { Registro } from "./registro.entity";
import { RegistrosService } from "./registros.service";

import { Controller, Get, Post, Put, Delete, Body, Param } from "@nestjs/common";

@Controller("registros")
export class RegistrosController {
    public constructor(private registroService: RegistrosService) {}

    @Get()
    public index(): Promise<Registro[]> {
        return this.registroService.findAll();
    }

    @Post("create")
    public async create(@Body() data: Registro): Promise<any> {
        return this.registroService.create(data);
    }

    @Put(":id/update")
    public async update(@Param("id") id, @Body() data: Registro): Promise<any> {
        data.id_registro = Number(id);
        return this.registroService.update(data);
    }
    @Delete(":id/delete")
    public async delete(@Param("id") id): Promise<any> {
        return this.registroService.delete(id);
    }
}
