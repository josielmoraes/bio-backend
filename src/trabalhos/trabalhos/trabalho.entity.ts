import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    ManyToOne,
    JoinColumn,
    ManyToMany,
    JoinTable,
} from "typeorm";
import { ApiModelProperty } from "@nestjs/swagger";
import { Endereco } from "../../enderecos/enderecos/endereco.entity";
import { Pessoa } from "../../pessoas/pessoas/pessoa.entity";
import { PessoaTrabalho } from "../../pessoas/pessoas/relacaoPessoas.entity";
import { Registro } from "../../registros/registros/registro.entity";
import { Especie, Genero } from "../../taxonomias/taxonomias/taxonomia.entity";
import { Autotrabalho } from "./autotrabalho.entity";

@Entity("trabalho")
export class Trabalho {
    @ApiModelProperty()
    @PrimaryGeneratedColumn({ name: "id_trabalho", type: "bigint" })
    id: number;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    nome: string;

    @ApiModelProperty()
    @Column("integer", {
        nullable: true,
    })
    quantidade_paginas: number;

    @ApiModelProperty()
    @Column("integer", {
        nullable: true,
    })
    ano_publicacao: number;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    nome_local_publicacao: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    editora: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    tipo_trabalho: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    volume: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    serie: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    doi: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    isbn: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    issn: string;

    @ApiModelProperty()
    @Column("integer", {
        nullable: true,
    })
    pagina_descricao: number;

    @ApiModelProperty()
    @Column("integer", {
        nullable: true,
    })
    pagina_inicio: number;

    @ApiModelProperty()
    @Column("integer", {
        nullable: true,
    })
    pagina_final: number;

    @ApiModelProperty()
    @ManyToOne((type) => Endereco)
    @JoinColumn({ name: "id_endereco", referencedColumnName: "id" })
    public endereco: Endereco;

    @ApiModelProperty()
    @OneToMany(() => PessoaTrabalho, (trabalhopessoa) => trabalhopessoa.trabalho, { cascade: true })
    public trabalhopessoa: PessoaTrabalho[];

    @ApiModelProperty()
    @OneToMany(() => Autotrabalho, (trabalho_referencia) => trabalho_referencia.referencia, { cascade: true })
    public trabalho_referencia: Autotrabalho[];

    @ApiModelProperty()
    @OneToMany(() => Autotrabalho, (trabalho_atual) => trabalho_atual.atual, { cascade: true })
    public trabalho_atual: Autotrabalho[];

    @ApiModelProperty()
    @ManyToMany((type) => Registro, (registro) => registro.trabalhos, { cascade: true })
    @JoinTable({
        name: "trabalho_registro",
        joinColumn: { name: "id_trabalho", referencedColumnName: "id" },
        inverseJoinColumn: { name: "id_registro", referencedColumnName: "id" },
    })
    registros: Registro[];

    @ApiModelProperty()
    @ManyToMany((type) => Especie, (especie) => especie.trabalhos)
    especies: Especie[];

    @ApiModelProperty()
    @ManyToMany((type) => Genero, (genero) => genero.trabalhos)
    generos: Genero[];
}
