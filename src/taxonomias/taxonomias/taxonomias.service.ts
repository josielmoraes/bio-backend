import { Injectable } from "@nestjs/common";
import { Repository, UpdateResult, DeleteResult } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import {
    Reino,
    Filo,
    Classe,
    Ordem,
    Familia,
    Subfamilia,
    Supertribo,
    Tribo,
    Subtribo,
    Genero,
    Subgenero,
    Especie,
} from "./taxonomia.entity";

@Injectable()
export class TaxonomiasService {
    public constructor(
        @InjectRepository(Reino)
        private reinoRepository: Repository<Reino>,
        @InjectRepository(Filo)
        private filoRepository: Repository<Filo>,
        @InjectRepository(Classe)
        private classeRepository: Repository<Classe>,
        @InjectRepository(Ordem)
        private ordemRepository: Repository<Ordem>,
        @InjectRepository(Familia)
        private familiaRepository: Repository<Familia>,
        @InjectRepository(Subfamilia)
        private subFamiliaRepository: Repository<Subfamilia>,
        @InjectRepository(Supertribo)
        private superTriboRepository: Repository<Supertribo>,
        @InjectRepository(Tribo)
        private triboRepository: Repository<Tribo>,
        @InjectRepository(Subtribo)
        private subTriboRepository: Repository<Subtribo>,
        @InjectRepository(Genero)
        private generoRepository: Repository<Genero>,
        @InjectRepository(Subgenero)
        private subGeneroRepository: Repository<Subgenero>,
        @InjectRepository(Especie)
        private especieRepository: Repository<Especie>,
    ) {}

    //REINO REPOSITORY
    public async reinoFindAll(): Promise<Reino[]> {
        return await this.reinoRepository.find();
    }

    public async reinoCreate(data: Reino): Promise<Reino> {
        data.id_reino = null;
        return await this.reinoRepository.save(data);
    }

    public async reinoUpdate(data: Reino): Promise<UpdateResult> {
        return await this.reinoRepository.update(data.id_reino, { nome: data.nome });
    }

    public async reinoDelete(id): Promise<DeleteResult> {
        return await this.reinoRepository.delete(id);
    }

    //FILO REPOSITORY
    public async filoFindAll(): Promise<Filo[]> {
        const tmp = await this.filoRepository.find({
            cache: true,
            relations: ["reino"],
        });
        return tmp;
    }

    public async filoCreate(data: Filo): Promise<Filo> {
        data.id_filo = null;
        return await this.filoRepository.save(data);
    }

    public async filoUpdate(data: Filo): Promise<UpdateResult> {
        return await this.filoRepository.update(data.id_filo, { nome: data.nome, reino: data.reino });
    }

    public async filoDelete(id): Promise<DeleteResult> {
        return await this.filoRepository.delete(id);
    }

    //CLASSE REPOSITORY

    public async classeFindAll(): Promise<Classe[]> {
        return await this.classeRepository.find({
            cache: true,
            relations: ["filo", "filo.reino"],
        });
    }

    public async classeCreate(data: Classe): Promise<Classe> {
        data.id_classe = null;
        return await this.classeRepository.save(data);
    }

    public async classeUpdate(data: Classe): Promise<UpdateResult> {
        return await this.classeRepository.update(data.id_classe, { nome: data.nome, filo: data.filo });
    }

    public async classeDelete(id): Promise<DeleteResult> {
        return await this.classeRepository.delete(id);
    }

    //ORDEM REPOSITORY
    public async ordemFindAll(): Promise<Ordem[]> {
        return await this.ordemRepository.find({
            relations: ["classe", "classe.filo"],
        });
    }

    public async ordemCreate(data: Ordem): Promise<Ordem> {
        data.id_ordem = null;
        return await this.ordemRepository.save(data);
    }

    public async ordemUpdate(data: Ordem): Promise<UpdateResult> {
        return await this.ordemRepository.update(data.id_ordem, { nome: data.nome, classe: data.classe });
    }

    public async ordemDelete(id): Promise<DeleteResult> {
        return await this.ordemRepository.delete(id);
    }

    //FAMIALIA REPOSITORY
    public async familiaFindAll(): Promise<Familia[]> {
        return await this.familiaRepository.find({
            relations: ["ordem", "ordem.classe"],
        });
    }

    public async familiaCreate(data: Familia): Promise<Familia> {
        data.id_familia = null;
        return await this.familiaRepository.save(data);
    }

    public async familiaUpdate(data: Familia): Promise<UpdateResult> {
        return await this.familiaRepository.update(data.id_familia, { nome: data.nome, ordem: data.ordem });
    }

    public async familiaDelete(id): Promise<DeleteResult> {
        return await this.familiaRepository.delete(id);
    }

    //SUBFAMIALIA REPOSITORY
    public async subFamiliaFindAll(): Promise<Subfamilia[]> {
        return await this.subFamiliaRepository.find({
            relations: ["familia"],
        });
    }

    public async subFamiliaCreate(data: Subfamilia): Promise<Subfamilia> {
        data.id_subfamilia = null;
        return await this.subFamiliaRepository.save(data);
    }

    public async subFamiliaUpdate(data: Subfamilia): Promise<UpdateResult> {
        return await this.subFamiliaRepository.update(data.id_subfamilia, { nome: data.nome, familia: data.familia });
    }

    public async subFamiliaDelete(id): Promise<DeleteResult> {
        return await this.subFamiliaRepository.delete(id);
    }

    //SUPER TRIBO REPOSITORY
    public async superTriboFindAll(): Promise<Supertribo[]> {
        return await this.superTriboRepository.find({
            relations: ["familia", "subfamilia"],
        });
    }

    public async superTriboCreate(data: Supertribo): Promise<Supertribo> {
        data.id_supertribo = null;
        return await this.superTriboRepository.save(data);
    }

    public async superTriboUpdate(data: Supertribo): Promise<UpdateResult> {
        return await this.superTriboRepository.update(data.id_supertribo, {
            nome: data.nome,
            familia: data.familia,
            subfamilia: data.subfamilia,
        });
    }

    public async superTriboDelete(id): Promise<DeleteResult> {
        return await this.superTriboRepository.delete(id);
    }

    //TRIBO REPOSITORY
    public async triboFindAll(): Promise<Tribo[]> {
        return await this.triboRepository.find({
            relations: ["familia", "subfamilia", "supertribo"],
        });
    }

    public async triboCreate(data: Tribo): Promise<Tribo> {
        data.id_tribo = null;
        return await this.triboRepository.save(data);
    }

    public async triboUpdate(data: Tribo): Promise<UpdateResult> {
        //if (data.supertribo == "") data.supertribo = null;
        //if (data.subtribo == "") data.subtribo = null;
        return await this.triboRepository.update(data.id_tribo, {
            nome: data.nome,
            familia: data.familia,
            subfamilia: data.subfamilia,
            supertribo: data.supertribo,
        });
    }

    public async triboDelete(id): Promise<DeleteResult> {
        return await this.triboRepository.delete(id);
    }

    //SUB TRIBO REPOSITORY
    public async subTriboFindAll(): Promise<Subtribo[]> {
        return await this.subTriboRepository.find({
            relations: ["tribo"],
        });
    }

    public async subTriboCreate(data: Subtribo): Promise<Subtribo> {
        data.id_subtribo = null;
        return await this.subTriboRepository.save(data);
    }

    public async subTriboUpdate(data: Subtribo): Promise<UpdateResult> {
        return await this.subTriboRepository.update(data.id_subtribo, {
            nome: data.nome,
            tribo: data.tribo,
        });
    }

    public async subTriboDelete(id): Promise<DeleteResult> {
        return await this.subTriboRepository.delete(id);
    }

    //GENERO REPOSITORY
    public async generoFindAll(): Promise<Genero[]> {
        return await this.generoRepository.find({
            relations: ["tribo", "subtribo", "familia"],
        });
    }

    public async generoCreate(data: Genero): Promise<Genero> {
        data.id_genero = null;
        return await this.generoRepository.save(data);
    }

    public async generoUpdate(data: Genero): Promise<UpdateResult> {
        return await this.generoRepository.update(data.id_genero, {
            nome: data.nome,
            tribo: data.tribo,
            subtribo: data.subtribo,
            familia: data.familia,
        });
    }

    public async generoDelete(id): Promise<DeleteResult> {
        return await this.generoRepository.delete(id);
    }

    //SUB GENERO REPOSITORY
    public async subGeneroFindAll(): Promise<Subgenero[]> {
        return await this.subGeneroRepository.find({
            relations: ["genero"],
        });
    }

    public async subGeneroCreate(data: Subgenero): Promise<Subgenero> {
        data.id_subgenero = null;
        return await this.subGeneroRepository.save(data);
    }

    public async subGeneroUpdate(data: Subgenero): Promise<UpdateResult> {
        return await this.subGeneroRepository.update(data.id_subgenero, {
            nome: data.nome,
            genero: data.genero,
        });
    }

    public async subGeneroDelete(id): Promise<DeleteResult> {
        return await this.subGeneroRepository.delete(id);
    }

    //SUB GENERO REPOSITORY
    public async especieFindAll(): Promise<Especie[]> {
        return await this.especieRepository.find({
            relations: ["genero", "subgenero", "parent_id_especie"],
        });
    }

    public async especieCreate(data: Especie): Promise<Especie> {
        data.id_especie = null;
        return await this.especieRepository.save(data);
    }

    public async especieUpdate(data: Especie): Promise<UpdateResult> {
        return await this.especieRepository.update(data.id_especie, {
            nome: data.nome,
            genero: data.genero,
            subgenero: data.subgenero,
            e_sinonimo: data.e_sinonimo,
            parent_id_especie: data.parent_id_especie,
        });
    }

    public async especieDelete(id): Promise<DeleteResult> {
        return await this.especieRepository.delete(id);
    }
}
