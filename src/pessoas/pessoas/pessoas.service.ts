import { Pessoa } from "./pessoa.entity";
import { Injectable } from "@nestjs/common";
import { Repository, UpdateResult, DeleteResult } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class PessoasService {
    public constructor(
        @InjectRepository(Pessoa)
        private pessoaRepository: Repository<Pessoa>,
    ) {}

    public async findAll(): Promise<Pessoa[]> {
        return await this.pessoaRepository.find();
    }

    public async create(pessoa: Pessoa): Promise<Pessoa> {
        pessoa.id = null;
        const tmp = await this.pessoaRepository.save(pessoa);

        return tmp;
    }

    public async update(pessoa: Pessoa): Promise<UpdateResult> {
        return await this.pessoaRepository.update(pessoa.id, pessoa);
    }

    public async delete(id): Promise<DeleteResult> {
        return await this.pessoaRepository.delete(id);
    }
}
