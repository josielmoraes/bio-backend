import { Pessoa } from "./../../pessoas/pessoas/pessoa.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { ApiModelProperty } from "@nestjs/swagger";
import { Localidade } from "../../localidades/localidades/localidade.entity";

@Entity("endereco")
export class Endereco {
    @ApiModelProperty()
    @PrimaryGeneratedColumn({ name: "id_endereco", type: "bigint" })
    id: number;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    bairro: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    logradouro: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    outro: string;

    //@ApiModelProperty()
    @OneToMany((type) => Pessoa, (Pessoa) => Pessoa.endereco)
    public pessoas: Pessoa[];

    @ApiModelProperty()
    @ManyToOne((type) => Localidade, { nullable: true })
    @JoinColumn({ name: "id_localidade", referencedColumnName: "id" })
    public localidade: Localidade;
}
