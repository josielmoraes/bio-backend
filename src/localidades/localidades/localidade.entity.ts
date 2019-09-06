import { Endereco } from "./../../enderecos/enderecos/endereco.entity";

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ApiModelProperty } from "@nestjs/swagger";

@Entity("localidades")
export class Localidade {
    @ApiModelProperty()
    @PrimaryGeneratedColumn({ type: "bigint" })
    id_localidade: number;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: false,
    })
    pais: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: false,
    })
    estado: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: false,
    })
    cidade: string;

    //@ApiModelProperty()
    @OneToMany((type) => Endereco, (Endereco) => Endereco.localidade)
    public enderecos: Endereco[];
}
