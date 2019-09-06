import { Colecao } from "./colecao.entity";
import { InjectRepository } from "@nestjs/typeorm";

import { Repository, UpdateResult, DeleteResult } from "typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ColecoesService {
    public constructor(
        @InjectRepository(Colecao)
        private colecaoRepository: Repository<Colecao>,
    ) {}

    public async findAll(): Promise<Colecao[]> {
        return await this.colecaoRepository.find();
    }

    public async create(data: Colecao): Promise<Colecao> {
        data.id_colecao = null;
        return await this.colecaoRepository.save(data);
    }

    public async update(data: Colecao): Promise<UpdateResult> {
        return await this.colecaoRepository.update(data.id_colecao, data);
    }

    public async delete(id): Promise<DeleteResult> {
        return await this.colecaoRepository.delete(id);
    }
}
