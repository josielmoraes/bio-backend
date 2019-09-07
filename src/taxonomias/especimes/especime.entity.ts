import { Registro } from "./../../registros/registros/registro.entity";
import { Pessoa } from "../../pessoas/pessoas/pessoa.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, ManyToMany, JoinTable } from "typeorm";
import { ApiModelProperty } from "@nestjs/swagger";
import { Especie, Genero, Familia, Ordem } from "../taxonomias/taxonomia.entity";
import { Localidade, LocalidadeEspecifica } from "../../localidades/localidades/localidade.entity";

import { Colecao } from "../colecoes/colecao.entity";

@Entity("especime")
export class Especime {
    @ApiModelProperty()
    @PrimaryGeneratedColumn({ name: "id_especime", type: "bigint" })
    id: number;

    @ApiModelProperty()
    @ManyToOne((type) => Pessoa)
    @JoinColumn({ name: "id_pessoa", referencedColumnName: "id" })
    public pessoa: Pessoa;

    @ApiModelProperty()
    @ManyToOne((type) => Colecao)
    @JoinColumn({ name: "id_colecao", referencedColumnName: "id" })
    public colecao: Colecao;

    @ApiModelProperty()
    @ManyToOne((type) => Localidade)
    @JoinColumn({ name: "id_localidade", referencedColumnName: "id" })
    public localidade: Localidade;

    @ApiModelProperty()
    @ManyToOne((type) => LocalidadeEspecifica)
    @JoinColumn({ name: "id_localidade_especificas", referencedColumnName: "id" })
    public localidade_especificas: LocalidadeEspecifica;

    @ApiModelProperty()
    @ManyToMany((type) => Registro, (registro) => registro.especimes, { cascade: true })
    @JoinTable({
        name: "especime_registro",
        joinColumn: { name: "id_especime", referencedColumnName: "id" },
        inverseJoinColumn: { name: "id_registro", referencedColumnName: "id" },
    })
    registros: Registro[];

    @ApiModelProperty()
    @ManyToOne((type) => Especie)
    @JoinColumn({ name: "id_especie", referencedColumnName: "id" })
    public especie: Especie;

    @ApiModelProperty()
    @ManyToOne((type) => Genero)
    @JoinColumn({ name: "id_genero", referencedColumnName: "id" })
    public genero: Genero;

    @ApiModelProperty()
    @ManyToOne((type) => Familia)
    @JoinColumn({ name: "id_familia", referencedColumnName: "id" })
    public familia: Familia;

    @ApiModelProperty()
    @ManyToOne((type) => Ordem)
    @JoinColumn({ name: "id_ordem", referencedColumnName: "id" })
    public ordem: Ordem;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    sexo: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    tipo_preparacao: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    numero_catalogo: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    observacoes: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    estado_conservacao: string;

    @ApiModelProperty()
    @Column("integer", {
        nullable: true,
    })
    dia_inicio_coleta: number;

    @ApiModelProperty()
    @Column("integer", {
        nullable: true,
    })
    dia_fim_coleta: number;

    @ApiModelProperty()
    @Column("integer", {
        nullable: true,
    })
    mes_inicio_coleta: number;

    @ApiModelProperty()
    @Column("integer", {
        nullable: true,
    })
    mes_fim_coleta: number;

    @ApiModelProperty()
    @Column("integer", {
        nullable: true,
    })
    ano_inicio_coleta: number;

    @ApiModelProperty()
    @Column("integer", {
        nullable: true,
    })
    ano_fim_coleta: number;

    @ApiModelProperty()
    @Column("boolean", {
        nullable: true,
    })
    decada_coleta: boolean;

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

    @ApiModelProperty()
    @Column("integer", {
        nullable: true,
    })
    qtd_especimes_pin: number;
}
