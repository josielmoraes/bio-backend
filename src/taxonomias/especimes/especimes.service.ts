import { Injectable } from "@nestjs/common";
import { Repository, UpdateResult, DeleteResult } from "typeorm";
import { Especime } from "./especime.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class EspecimesService {
    public constructor(
        @InjectRepository(Especime)
        private especimeRepository: Repository<Especime>,
    ) {}

    public async findAll(): Promise<Especime[]> {
        return await this.especimeRepository.find();
    }

    public async create(especimeData: Especime): Promise<Especime> {
        especimeData.id_especimes = null;
        return await this.especimeRepository.save(especimeData);
    }

    public async update(especimeData: Especime): Promise<UpdateResult> {
        return await this.especimeRepository.update(especimeData.id_especimes, especimeData);
    }

    public async delete(id): Promise<DeleteResult> {
        return await this.especimeRepository.delete(id);
    }
}
