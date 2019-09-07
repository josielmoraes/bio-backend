import { InjectRepository } from "@nestjs/typeorm";
import { Instituicao } from "./instituicao.entity";
import { Repository, UpdateResult, DeleteResult } from "typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()
export class InstituicoesService {
    public constructor(
        @InjectRepository(Instituicao)
        private instituicaoRepository: Repository<Instituicao>,
    ) {}

    public async findAll(): Promise<Instituicao[]> {
        return await this.instituicaoRepository.find();
    }

    public async create(instituicao: Instituicao): Promise<Instituicao> {
        instituicao.id = null;
        return await this.instituicaoRepository.save(instituicao);
    }

    public async update(instituicao: Instituicao): Promise<UpdateResult> {
        return await this.instituicaoRepository.update(instituicao.id, instituicao);
    }

    public async delete(id): Promise<DeleteResult> {
        return await this.instituicaoRepository.delete(id);
    }
}
