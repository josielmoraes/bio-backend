import { Instituicao } from "./../../instituicoes/instituicoes/instituicao.entity";
import { Endereco } from "../../enderecos/enderecos/endereco.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { ApiModelProperty } from "@nestjs/swagger";

@Entity("colecao")
export class Colecao {
    @PrimaryGeneratedColumn({ type: "bigint" })
    id_colecao: number;

    @ApiModelProperty()
    @ManyToOne((type) => Endereco, { nullable: false })
    @JoinColumn({ name: "id_endereco", referencedColumnName: "id_endereco" })
    public endereco: Endereco;

    @ApiModelProperty()
    @ManyToOne((type) => Instituicao, { nullable: false })
    @JoinColumn({ name: "id_instituicao", referencedColumnName: "id_instituicao" })
    public instituicao: Instituicao;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: false,
    })
    website: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: false,
    })
    anotacao: string;

    @ApiModelProperty()
    @Column("boolean", {
        nullable: false,
    })
    colecao_pessoal: boolean;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: false,
    })
    acronimo: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: false,
    })
    nome_completo: string;
}
