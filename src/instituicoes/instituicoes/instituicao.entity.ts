import { Localidade } from "../../localidades/localidades/localidade.entity";
import { Endereco } from "../../enderecos/enderecos/endereco.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { ApiModelProperty } from "@nestjs/swagger";

@Entity("instituicao")
export class Instituicao {
    @ApiModelProperty()
    @PrimaryGeneratedColumn({ name: "id_instituicao", type: "bigint" })
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
    telefone: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    website: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    redes_sociais: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    fax: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    endereco: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    anotacao: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    acronimo: string;

    //@ApiModelProperty()
    @ManyToOne((type) => Localidade, { nullable: true })
    @JoinColumn({ name: "id_localidade", referencedColumnName: "id" })
    public localidade: Localidade;

    @ApiModelProperty()
    @ManyToOne((type) => Endereco, { nullable: true })
    @JoinColumn({ name: "id_endereco", referencedColumnName: "id" })
    public id_endereco: Endereco;
}
