import { InjectRepository } from "@nestjs/typeorm";
import { Endereco } from "./endereco.entity";
import { Repository, UpdateResult, DeleteResult } from "typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()
export class EnderecosService {
    public constructor(
        @InjectRepository(Endereco)
        private enderecoRepository: Repository<Endereco>,
    ) {}

    public async findAll(): Promise<Endereco[]> {
        return await this.enderecoRepository.find();
    }

    public async create(endereco: Endereco): Promise<Endereco> {
        endereco.id_endereco = null;
        return await this.enderecoRepository.save(endereco);
    }

    public async update(endereco: Endereco): Promise<UpdateResult> {
        return await this.enderecoRepository.update(endereco.id_endereco, endereco);
    }

    public async delete(id): Promise<DeleteResult> {
        return await this.enderecoRepository.delete(id);
    }
}
