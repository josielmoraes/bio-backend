import { Endereco } from "./../../enderecos/enderecos/endereco.entity";

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ApiModelProperty } from "@nestjs/swagger";

@Entity("localidade")
export class Localidade {
    @ApiModelProperty()
    @PrimaryGeneratedColumn({ name: "id_localidade", type: "bigint" })
    id: number;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    pais: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    estado: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    cidade: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    observacao: string;

    //@ApiModelProperty()
    @OneToMany((type) => Endereco, (Endereco) => Endereco.localidade)
    public enderecos: Endereco[];
}

@Entity("localidade_especifica")
export class LocalidadeEspecifica {
    @ApiModelProperty()
    @PrimaryGeneratedColumn({ name: "id_localidade_especifica", type: "bigint" })
    id: number;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    observacoes: string;

    @ApiModelProperty()
    @Column("double precision", {
        nullable: true,
    })
    latitude: number;

    @ApiModelProperty()
    @Column("integer", {
        nullable: true,
    })
    lat_grau: number;

    @ApiModelProperty()
    @Column("integer", {
        nullable: true,
    })
    lat_min: number;

    @ApiModelProperty()
    @Column("integer", {
        nullable: true,
    })
    lat_seg: number;

    @ApiModelProperty()
    @Column("double precision", {
        nullable: true,
    })
    elevacao_minima: number;

    @ApiModelProperty()
    @Column("double precision", {
        nullable: true,
    })
    elevacao_maxima: number;

    @ApiModelProperty()
    @Column("double precision", {
        nullable: true,
    })
    longitude: number;

    @ApiModelProperty()
    @Column("integer", {
        nullable: true,
    })
    long_grau: number;

    @ApiModelProperty()
    @Column("integer", {
        nullable: true,
    })
    long_min: number;

    @ApiModelProperty()
    @Column("integer", {
        nullable: true,
    })
    long_seg: number;
}
