import { Registro } from "./registros/registro.entity";
import { Module } from "@nestjs/common";
import { RegistrosController } from "./registros/registros.controller";
import { RegistrosService } from "./registros/registros.service";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([Registro])],
    controllers: [RegistrosController],
    providers: [RegistrosService],
})
export class RegistrosModule {}
