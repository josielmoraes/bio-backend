import { Instituicao } from "./../../instituicoes/instituicoes/instituicao.entity";
import { Endereco } from "./../../enderecos/enderecos/endereco.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { ApiModelProperty } from "@nestjs/swagger";

@Entity("pessoas")
export class Pessoa {
    @ApiModelProperty()
    @PrimaryGeneratedColumn({ type: "bigint" })
    id_pessoa: number;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    short_name: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    apelido: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    full_name: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    abreviacao_sobrenome: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    nacionalidade: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    email: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    telefone: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    instituicao: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    cargo: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    telefone_de_trabalho: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    anotacao: string;

    @ApiModelProperty()
    @ManyToOne((type) => Endereco)
    @JoinColumn({ name: "id_endereco", referencedColumnName: "id_endereco" })
    public endereco: Endereco;

    @ApiModelProperty()
    @ManyToOne((type) => Instituicao)
    @JoinColumn({ name: "id_instituicao", referencedColumnName: "id_instituicao" })
    public id_instituicao: Instituicao;
}
