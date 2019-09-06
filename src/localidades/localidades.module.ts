import { Localidade } from "./localidades/localidade.entity";
import { Module } from "@nestjs/common";
import { LocalidadesController } from "./localidades/localidades.controller";
import { LocalidadesService } from "./localidades/localidades.service";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([Localidade])],
    controllers: [LocalidadesController],
    providers: [LocalidadesService],
})
export class LocalidadesModule {}
