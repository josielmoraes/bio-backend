import { Endereco } from "./enderecos/endereco.entity";
import { Module } from "@nestjs/common";
import { EnderecosController } from "./enderecos/enderecos.controller";
import { EnderecosService } from "./enderecos/enderecos.service";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([Endereco])],
    controllers: [EnderecosController],
    providers: [EnderecosService],
})
export class EnderecosModule {}
