import { Especime } from "./../../taxonomias/especimes/especime.entity";
import { Endereco } from "./../../enderecos/enderecos/endereco.entity";
import { Pessoa } from "./../../pessoas/pessoas/pessoa.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn, ManyToMany } from "typeorm";
import { ApiModelProperty } from "@nestjs/swagger";
import { Trabalho } from "../../trabalhos/trabalhos/trabalho.entity";

@Entity("registro")
export class Registro {
    @ApiModelProperty()
    @PrimaryGeneratedColumn({ name: "id_registro", type: "bigint" })
    id: number;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    nome: string;
    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    tipo: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    link: string;

    @ApiModelProperty()
    @Column("integer", {
        nullable: true,
    })
    tamanho: number;
    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    observacao: string;

    // @ApiModelProperty()
    @ManyToOne((type) => Pessoa)
    @JoinColumn({ name: "id_pessoa", referencedColumnName: "id" })
    public pessoa: Pessoa;

    //@ApiModelProperty()
    @ManyToOne((type) => Endereco)
    @JoinColumn({ name: "id_endereco", referencedColumnName: "id" })
    public endereco: Endereco;

    @ApiModelProperty()
    @ManyToMany((type) => Especime, (especime) => especime.registros)
    especimes: Especime[];

    @ApiModelProperty()
    @ManyToMany((type) => Trabalho, (trabalho) => trabalho.registros)
    trabalhos: Trabalho[];
}
