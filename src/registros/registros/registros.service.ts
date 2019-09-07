import { Registro } from "./registro.entity";
import { Injectable } from "@nestjs/common";
import { Repository, UpdateResult, DeleteResult } from "typeorm";

import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class RegistrosService {
    public constructor(
        @InjectRepository(Registro)
        private registroRepository: Repository<Registro>,
    ) {}

    public async findAll(): Promise<Registro[]> {
        return await this.registroRepository.find();
    }

    public async create(data: Registro): Promise<Registro> {
        data.id = null;
        return await this.registroRepository.save(data);
    }

    public async update(data: Registro): Promise<UpdateResult> {
        return await this.registroRepository.update(data.id, data);
    }

    public async delete(id): Promise<DeleteResult> {
        return await this.registroRepository.delete(id);
    }
}
