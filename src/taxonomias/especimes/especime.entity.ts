import { Registro } from "./../../registros/registros/registro.entity";
import { Pessoa } from "../../pessoas/pessoas/pessoa.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, ManyToMany, JoinTable } from "typeorm";
import { ApiModelProperty } from "@nestjs/swagger";
import { Especie } from "../taxonomias/taxonomia.entity";

@Entity("especimes")
export class Especime {
    //@ApiModelProperty()
    @PrimaryGeneratedColumn({ type: "bigint" })
    id_especimes: number;

    //@ApiModelProperty()
    @ManyToOne((type) => Pessoa, { nullable: true })
    @JoinColumn({ name: "id_pessoa", referencedColumnName: "id_pessoa" })
    public pessoa: Pessoa;

    // @ApiModelProperty()
    @ManyToOne((type) => Especie, { nullable: true })
    @JoinColumn({ name: "id_especie", referencedColumnName: "id_especie" })
    public especie: Especie;

    @ApiModelProperty()
    @ManyToMany((type) => Registro, (registro) => registro.especimes, { cascade: true })
    @JoinTable({
        name: "especimes_registro",
        joinColumn: { name: "id_especimes", referencedColumnName: "id_especimes" },
        inverseJoinColumn: { name: "id_registro", referencedColumnName: "id_registro" },
    })
    registros: Registro[];

    @ApiModelProperty()
    @Column("character varying", { nullable: true })
    sexo: string;

    @ApiModelProperty()
    @Column("character varying", { nullable: true })
    observacoes: string;

    @ApiModelProperty()
    @Column("character varying", { nullable: true })
    estado_conservacao: string;

    @ApiModelProperty()
    @Column("integer", { nullable: true })
    mes_inicio_coleta: number;

    @ApiModelProperty()
    @Column("integer", { nullable: true })
    dia_inicio_coleta: number;

    @ApiModelProperty()
    @Column("integer", { nullable: true })
    dia_fim_coleta: number;

    @ApiModelProperty()
    @Column("integer", { nullable: true })
    mes_fim_coleta: number;

    @ApiModelProperty()
    @Column("integer", { nullable: true })
    ano_coleta: number;

    @ApiModelProperty()
    @Column("boolean", { nullable: true })
    decada_coleta: boolean;

    @ApiModelProperty()
    @Column("double precision", { nullable: true })
    latitude: number;

    @ApiModelProperty()
    @Column("double precision", { nullable: true })
    elevacao_minima: number;

    @ApiModelProperty()
    @Column("double precision", { nullable: true })
    elevacao_maxima: number;

    @ApiModelProperty()
    @Column("double precision", { nullable: true })
    longitude: number;

    @ApiModelProperty()
    @Column("integer", { nullable: true })
    qtd_especimes_pin: number;
}
