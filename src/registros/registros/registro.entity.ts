import { Especime } from "./../../taxonomias/especimes/especime.entity";
import { Endereco } from "./../../enderecos/enderecos/endereco.entity";
import { Pessoa } from "./../../pessoas/pessoas/pessoa.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn, ManyToMany } from "typeorm";
import { ApiModelProperty } from "@nestjs/swagger";

@Entity("registro")
export class Registro {
    @ApiModelProperty()
    @PrimaryGeneratedColumn({ type: "bigint" })
    id_registro: number;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: false,
    })
    nome: string;
    @ApiModelProperty()
    @Column("character varying", {
        nullable: false,
    })
    tipo: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: false,
    })
    link: string;

    @ApiModelProperty()
    @Column("integer", {
        nullable: false,
    })
    tamanho: number;
    @ApiModelProperty()
    @Column("character varying", {
        nullable: false,
    })
    observacao: string;

    // @ApiModelProperty()
    @ManyToOne((type) => Pessoa)
    @JoinColumn({ name: "id_pessoa", referencedColumnName: "id_pessoa" })
    public pessoa: Pessoa;

    //@ApiModelProperty()
    @ManyToOne((type) => Endereco)
    @JoinColumn({ name: "id_endereco", referencedColumnName: "id_endereco" })
    public endereco: Endereco;

    @ApiModelProperty()
    @ManyToMany((type) => Especime, (especime) => especime.registros)
    especimes: Especime[];
}
