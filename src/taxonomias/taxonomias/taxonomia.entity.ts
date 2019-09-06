import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { ApiModelProperty } from "@nestjs/swagger";
import { Pessoa } from "../../pessoas/pessoas/pessoa.entity";
@Entity("reinos")
export class Reino {
    @ApiModelProperty()
    @PrimaryGeneratedColumn({ type: "bigint" })
    id_reino: number;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: false,
    })
    nome: string;
}

@Entity("filos")
export class Filo {
    @ApiModelProperty()
    @PrimaryGeneratedColumn({ name: "id_filo", type: "bigint" })
    id_filo: number;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: false,
    })
    nome: string;

    @ApiModelProperty()
    @ManyToOne((type) => Reino)
    @JoinColumn({ name: "id_reino", referencedColumnName: "id_reino" })
    public reino: Reino;
}

@Entity("classes")
export class Classe {
    @ApiModelProperty()
    @PrimaryGeneratedColumn({ type: "bigint" })
    id_classe: number;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: false,
    })
    nome: string;

    @ApiModelProperty()
    @ManyToOne((type) => Filo, { nullable: false })
    @JoinColumn({ name: "id_filo", referencedColumnName: "id_filo" })
    public filo: Filo;
}

@Entity("ordens")
export class Ordem {
    @ApiModelProperty()
    @PrimaryGeneratedColumn({ type: "bigint" })
    id_ordem: number;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: false,
    })
    nome: string;

    @ApiModelProperty()
    @ManyToOne((type) => Classe, { nullable: false })
    @JoinColumn({ name: "id_classe", referencedColumnName: "id_classe" })
    public classe: Classe;
}

@Entity("familias")
export class Familia {
    @ApiModelProperty()
    @PrimaryGeneratedColumn({ type: "bigint" })
    id_familia: number;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: false,
    })
    nome: string;

    @ApiModelProperty()
    @ManyToOne((type) => Ordem, { nullable: false })
    @JoinColumn({ name: "id_ordem", referencedColumnName: "id_ordem" })
    public ordem: Ordem;
}

@Entity("subfamilias")
export class Subfamilia {
    @ApiModelProperty()
    @PrimaryGeneratedColumn({ type: "bigint" })
    id_subfamilia: number;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: false,
    })
    nome: string;

    @ApiModelProperty()
    @ManyToOne((type) => Familia, { nullable: false })
    @JoinColumn({ name: "id_familia", referencedColumnName: "id_familia" })
    public familia: Familia;
}

@Entity("supertribos")
export class Supertribo {
    @ApiModelProperty()
    @PrimaryGeneratedColumn({ type: "bigint" })
    id_supertribo: number;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: false,
    })
    nome: string;

    @ApiModelProperty()
    @ManyToOne((type) => Familia, { nullable: false })
    @JoinColumn({ name: "id_familia", referencedColumnName: "id_familia" })
    public familia: Familia;

    @ApiModelProperty()
    @ManyToOne((type) => Subfamilia, { nullable: false })
    @JoinColumn({ name: "id_subfamilia", referencedColumnName: "id_subfamilia" })
    public subfamilia: Subfamilia;
}

@Entity("tribos")
export class Tribo {
    @ApiModelProperty()
    @PrimaryGeneratedColumn({ type: "bigint" })
    id_tribo: number;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: false,
    })
    nome: string;

    @ApiModelProperty()
    @ManyToOne((type) => Familia, { nullable: false })
    @JoinColumn({ name: "id_familia", referencedColumnName: "id_familia" })
    public familia: Familia;

    @ApiModelProperty()
    @ManyToOne((type) => Subfamilia, { nullable: false })
    @JoinColumn({ name: "id_subfamilia", referencedColumnName: "id_subfamilia" })
    public subfamilia: Subfamilia;

    @ApiModelProperty()
    @ManyToOne((type) => Supertribo, { nullable: false })
    @JoinColumn({ name: "id_supertribo", referencedColumnName: "id_supertribo" })
    public supertribo: Subfamilia;
}

@Entity("subtribos")
export class Subtribo {
    @ApiModelProperty()
    @PrimaryGeneratedColumn({ type: "bigint" })
    id_subtribo: number;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: false,
    })
    nome: string;

    @ApiModelProperty()
    @ManyToOne((type) => Tribo, { nullable: false })
    @JoinColumn({ name: "id_tribo", referencedColumnName: "id_tribo" })
    public tribo: Tribo;
}

@Entity("generos")
export class Genero {
    @ApiModelProperty()
    @PrimaryGeneratedColumn({ type: "bigint" })
    id_genero: number;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: false,
    })
    nome: string;

    @ApiModelProperty()
    @ManyToOne((type) => Familia, { nullable: false })
    @JoinColumn({ name: "id_familia", referencedColumnName: "id_familia" })
    public familia: Familia;

    @ApiModelProperty()
    @ManyToOne((type) => Tribo, { nullable: false })
    @JoinColumn({ name: "id_tribo", referencedColumnName: "id_tribo" })
    public tribo: Tribo;

    @ApiModelProperty()
    @ManyToOne((type) => Subtribo, { nullable: false })
    @JoinColumn({ name: "id_subtribo", referencedColumnName: "id_subtribo" })
    public subtribo: Subtribo;
}

@Entity("subgeneros")
export class Subgenero {
    @ApiModelProperty()
    @PrimaryGeneratedColumn({ type: "bigint" })
    id_subgenero: number;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: false,
    })
    nome: string;

    @ApiModelProperty()
    @ManyToOne((type) => Genero, { nullable: false })
    @JoinColumn({ name: "id_genero", referencedColumnName: "id_genero" })
    public genero: Genero;
}

@Entity("especies")
export class Especie {
    @ApiModelProperty()
    @PrimaryGeneratedColumn({ type: "bigint" })
    id_especie: number;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: false,
    })
    nome: string;

    @ApiModelProperty()
    @ManyToOne((type) => Genero, { nullable: false })
    @JoinColumn({ name: "id_genero", referencedColumnName: "id_genero" })
    public genero: Genero;

    @ApiModelProperty()
    @ManyToOne((type) => Subgenero, { nullable: false })
    @JoinColumn({ name: "id_subgenero", referencedColumnName: "id_subgenero" })
    public subgenero: Subgenero;

    @ApiModelProperty()
    @ManyToOne((type) => Pessoa, { nullable: false })
    @JoinColumn({ name: "id_pessoa", referencedColumnName: "id_pessoa" })
    public pessoa: Pessoa;

    @ApiModelProperty()
    @ManyToOne((type) => Especie)
    @JoinColumn({ name: "parent_id_especie", referencedColumnName: "id_especie" })
    public parent_id_especie: Especie;
}
