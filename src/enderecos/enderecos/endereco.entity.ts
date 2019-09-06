import { Pessoa } from "./../../pessoas/pessoas/pessoa.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { ApiModelProperty } from "@nestjs/swagger";
import { Localidade } from "../../localidades/localidades/localidade.entity";

@Entity("enderecos")
export class Endereco {
    @ApiModelProperty()
    @PrimaryGeneratedColumn({ type: "bigint" })
    id_endereco: number;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: false,
    })
    bairro: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: false,
    })
    logradouro: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: false,
    })
    outro: string;

    //@ApiModelProperty()
    @OneToMany((type) => Pessoa, (Pessoa) => Pessoa.endereco)
    public pessoas: Pessoa[];

    @ApiModelProperty()
    @ManyToOne((type) => Localidade, { nullable: true })
    @JoinColumn({ name: "id_localidade", referencedColumnName: "id_localidade" })
    public localidade: Localidade;
}
