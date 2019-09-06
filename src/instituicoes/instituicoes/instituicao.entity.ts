import { Localidade } from "../../localidades/localidades/localidade.entity";
import { Endereco } from "../../enderecos/enderecos/endereco.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { ApiModelProperty } from "@nestjs/swagger";

@Entity("instituicao")
export class Instituicao {
    @ApiModelProperty()
    @PrimaryGeneratedColumn({ type: "bigint" })
    id_instituicao: number;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: false,
    })
    nome: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: false,
    })
    telefone: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: false,
    })
    website: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: false,
    })
    redes_sociais: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: false,
    })
    fax: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: false,
    })
    endereco: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: false,
    })
    anotacao: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: false,
    })
    acronimo: string;

    //@ApiModelProperty()
    @ManyToOne((type) => Localidade, { nullable: false })
    @JoinColumn({ name: "id_localidade", referencedColumnName: "id_localidade" })
    public localidade: Localidade;

    @ApiModelProperty()
    @ManyToOne((type) => Endereco, { nullable: false })
    @JoinColumn({ name: "id_endereco", referencedColumnName: "id_endereco" })
    public id_endereco: Endereco;
}
