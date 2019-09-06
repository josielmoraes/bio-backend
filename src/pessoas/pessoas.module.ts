import { Pessoa } from "./pessoas/pessoa.entity";
import { Module } from "@nestjs/common";
import { PessoasController } from "./pessoas/pessoas.controller";
import { PessoasService } from "./pessoas/pessoas.service";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([Pessoa])],
    controllers: [PessoasController],
    providers: [PessoasService],
})
export class PessoasModule {}
