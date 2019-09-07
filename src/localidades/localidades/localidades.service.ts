import { Injectable } from "@nestjs/common";
import { Repository, UpdateResult, DeleteResult } from "typeorm";
import { Localidade } from "./localidade.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class LocalidadesService {
    public constructor(
        @InjectRepository(Localidade)
        private enderecoRepository: Repository<Localidade>,
    ) {}

    public async findAll(): Promise<Localidade[]> {
        return await this.enderecoRepository.find();
    }

    public async create(localidade: Localidade): Promise<Localidade> {
        localidade.id = null;
        return await this.enderecoRepository.save(localidade);
    }

    public async update(localidade: Localidade): Promise<UpdateResult> {
        return await this.enderecoRepository.update(localidade.id, localidade);
    }

    public async delete(id): Promise<DeleteResult> {
        return await this.enderecoRepository.delete(id);
    }
}
