import { Instituicao } from "./../../instituicoes/instituicoes/instituicao.entity";
import { Endereco } from "../../enderecos/enderecos/endereco.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { ApiModelProperty } from "@nestjs/swagger";

@Entity("colecao")
export class Colecao {
    @PrimaryGeneratedColumn({ name: "id_colecao", type: "bigint" })
    id: number;

    @ApiModelProperty()
    @ManyToOne((type) => Endereco, { nullable: true })
    @JoinColumn({ name: "id_endereco", referencedColumnName: "id" })
    public endereco: Endereco;

    @ApiModelProperty()
    @ManyToOne((type) => Instituicao, { nullable: true })
    @JoinColumn({ name: "id_instituicao", referencedColumnName: "id" })
    public instituicao: Instituicao;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    website: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    anotacao: string;

    @ApiModelProperty()
    @Column("boolean", {
        nullable: true,
    })
    colecao_pessoal: boolean;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    acronimo: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    nome_completo: string;
}
