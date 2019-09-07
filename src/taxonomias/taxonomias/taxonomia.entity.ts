import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    ManyToOne,
    JoinColumn,
    ManyToMany,
    JoinTable,
} from "typeorm";
import { ApiModelProperty } from "@nestjs/swagger";
import { Pessoa } from "../../pessoas/pessoas/pessoa.entity";
import {
    PessoaReino,
    PessoaFilo,
    PessoaClasse,
    PessoaOrdem,
    PessoaFamilia,
    PessoaSubfamilia,
    PessoaSupertribo,
    PessoaTribo,
    PessoaSubtribo,
    PessoaGenero,
    PessoaSubgenero,
    PessoaEspecie,
} from "../../pessoas/pessoas/relacaoPessoas.entity";
import { Trabalho } from "../../trabalhos/trabalhos/trabalho.entity";

@Entity("reino")
export class Reino {
    @ApiModelProperty()
    @PrimaryGeneratedColumn({ name: "id_reino", type: "bigint" })
    id: number;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    nome: string;

    @ApiModelProperty()
    @Column("integer", {
        nullable: true,
    })
    ano_descricao: number;

    @ApiModelProperty()
    @OneToMany(() => PessoaReino, (reinopessoa) => reinopessoa.reino, { cascade: true })
    public reinopessoa: PessoaReino[];
}

@Entity("filo")
export class Filo {
    @ApiModelProperty()
    @PrimaryGeneratedColumn({ name: "id_filo", type: "bigint" })
    id: number;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    nome: string;

    @ApiModelProperty()
    @Column("integer", {
        nullable: true,
    })
    ano_descricao: number;

    @ApiModelProperty()
    @ManyToOne((type) => Reino)
    @JoinColumn({ name: "id_reino", referencedColumnName: "id" })
    public reino: Reino;

    @ApiModelProperty()
    @OneToMany(() => PessoaFilo, (reinopessoa) => reinopessoa.filo, { cascade: true })
    public filopessoa: PessoaFilo[];
}

@Entity("classe")
export class Classe {
    @ApiModelProperty()
    @PrimaryGeneratedColumn({ name: "id_classe", type: "bigint" })
    id: number;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    nome: string;

    @ApiModelProperty()
    @Column("integer", {
        nullable: true,
    })
    ano_descricao: number;

    @ApiModelProperty()
    @ManyToOne((type) => Filo, { nullable: true })
    @JoinColumn({ name: "id_filo", referencedColumnName: "id" })
    public filo: Filo;

    @ApiModelProperty()
    @OneToMany(() => PessoaClasse, (classepessoa) => classepessoa.classe, { cascade: true })
    public classepessoa: PessoaClasse[];
}

@Entity("ordem")
export class Ordem {
    @ApiModelProperty()
    @PrimaryGeneratedColumn({ name: "id_ordem", type: "bigint" })
    id: number;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    nome: string;

    @ApiModelProperty()
    @Column("integer", {
        nullable: true,
    })
    ano_descricao: number;

    @ApiModelProperty()
    @ManyToOne((type) => Classe, { nullable: true })
    @JoinColumn({ name: "id_classe", referencedColumnName: "id" })
    public classe: Classe;

    @ApiModelProperty()
    @OneToMany(() => PessoaOrdem, (ordempessoa) => ordempessoa.ordem, { cascade: true })
    public ordempessoa: PessoaOrdem[];
}

@Entity("familia")
export class Familia {
    @ApiModelProperty()
    @PrimaryGeneratedColumn({ name: "id_familia", type: "bigint" })
    id: number;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    nome: string;

    @ApiModelProperty()
    @Column("integer", {
        nullable: true,
    })
    ano_descricao: number;

    @ApiModelProperty()
    @ManyToOne((type) => Ordem, { nullable: true })
    @JoinColumn({ name: "id_ordem", referencedColumnName: "id" })
    public ordem: Ordem;

    @ApiModelProperty()
    @OneToMany(() => PessoaFamilia, (familiapessoa) => familiapessoa.familia, { cascade: true })
    public familiapessoa: PessoaFamilia[];
}

@Entity("subfamilia")
export class Subfamilia {
    @ApiModelProperty()
    @PrimaryGeneratedColumn({ name: "id_subfamilia", type: "bigint" })
    id: number;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    nome: string;

    @ApiModelProperty()
    @Column("integer", {
        nullable: true,
    })
    ano_descricao: number;

    @ApiModelProperty()
    @ManyToOne((type) => Familia, { nullable: true })
    @JoinColumn({ name: "id_familia", referencedColumnName: "id" })
    public familia: Familia;

    @ApiModelProperty()
    @OneToMany(() => PessoaSubfamilia, (subfamiliapessoa) => subfamiliapessoa.subfamilia, { cascade: true })
    public subfamiliapessoa: PessoaSubfamilia[];
}

@Entity("supertribo")
export class Supertribo {
    @ApiModelProperty()
    @PrimaryGeneratedColumn({ name: "id_supertribo", type: "bigint" })
    id: number;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    nome: string;

    @ApiModelProperty()
    @Column("integer", {
        nullable: true,
    })
    ano_descricao: number;

    @ApiModelProperty()
    @ManyToOne((type) => Familia, { nullable: true })
    @JoinColumn({ name: "id_familia", referencedColumnName: "id" })
    public familia: Familia;

    @ApiModelProperty()
    @ManyToOne((type) => Subfamilia, { nullable: true })
    @JoinColumn({ name: "id_subfamilia", referencedColumnName: "id" })
    public subfamilia: Subfamilia;

    @ApiModelProperty()
    @OneToMany(() => PessoaSupertribo, (supertribopessoa) => supertribopessoa.supertribo, { cascade: true })
    public supertribopessoa: PessoaSupertribo[];
}

@Entity("tribo")
export class Tribo {
    @ApiModelProperty()
    @PrimaryGeneratedColumn({ name: "id_tribo", type: "bigint" })
    id: number;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    nome: string;

    @ApiModelProperty()
    @Column("integer", {
        nullable: true,
    })
    ano_descricao: number;

    @ApiModelProperty()
    @ManyToOne((type) => Familia, { nullable: true })
    @JoinColumn({ name: "id_familia", referencedColumnName: "id" })
    public familia: Familia;

    @ApiModelProperty()
    @ManyToOne((type) => Subfamilia, { nullable: true })
    @JoinColumn({ name: "id_subfamilia", referencedColumnName: "id" })
    public subfamilia: Subfamilia;

    @ApiModelProperty()
    @ManyToOne((type) => Supertribo, { nullable: true })
    @JoinColumn({ name: "id_supertribo", referencedColumnName: "id" })
    public supertribo: Subfamilia;

    @ApiModelProperty()
    @OneToMany(() => PessoaTribo, (tribopessoa) => tribopessoa.tribo, { cascade: true })
    public tribopessoa: PessoaTribo[];
}

@Entity("subtribo")
export class Subtribo {
    @ApiModelProperty()
    @PrimaryGeneratedColumn({ name: "id_subtribo", type: "bigint" })
    id: number;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    nome: string;

    @ApiModelProperty()
    @Column("integer", {
        nullable: true,
    })
    ano_descricao: number;

    @ApiModelProperty()
    @ManyToOne((type) => Tribo, { nullable: true })
    @JoinColumn({ name: "id_tribo", referencedColumnName: "id" })
    public tribo: Tribo;

    @ApiModelProperty()
    @OneToMany(() => PessoaSubtribo, (subtribopessoa) => subtribopessoa.subtribo, { cascade: true })
    public subtribopessoa: PessoaSubtribo[];
}

@Entity("genero")
export class Genero {
    @ApiModelProperty()
    @PrimaryGeneratedColumn({ name: "id_genero", type: "bigint" })
    id: number;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    nome: string;

    @ApiModelProperty()
    @Column("integer", {
        nullable: true,
    })
    ano_descricao: number;

    @ApiModelProperty()
    @ManyToOne((type) => Familia, { nullable: true })
    @JoinColumn({ name: "id_familia", referencedColumnName: "id" })
    public familia: Familia;

    @ApiModelProperty()
    @ManyToOne((type) => Tribo, { nullable: true })
    @JoinColumn({ name: "id_tribo", referencedColumnName: "id" })
    public tribo: Tribo;

    @ApiModelProperty()
    @ManyToOne((type) => Subtribo, { nullable: true })
    @JoinColumn({ name: "id_subtribo", referencedColumnName: "id" })
    public subtribo: Subtribo;

    @ApiModelProperty()
    @OneToMany(() => PessoaGenero, (generopessoa) => generopessoa.genero, { cascade: true })
    public generopessoa: PessoaGenero[];

    @ApiModelProperty()
    @ManyToMany((type) => Trabalho, (trabalho) => trabalho.generos, { cascade: true })
    @JoinTable({
        name: "trabalho_genero",
        joinColumn: { name: "id_trabalho", referencedColumnName: "id" },
        inverseJoinColumn: { name: "id_genero", referencedColumnName: "id" },
    })
    trabalhos: Trabalho[];
}

@Entity("subgenero")
export class Subgenero {
    @ApiModelProperty()
    @PrimaryGeneratedColumn({ name: "id_subgenero", type: "bigint" })
    id: number;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    nome: string;

    @ApiModelProperty()
    @Column("integer", {
        nullable: true,
    })
    ano_descricao: number;

    @ApiModelProperty()
    @ManyToOne((type) => Genero, { nullable: true })
    @JoinColumn({ name: "id_genero", referencedColumnName: "id" })
    public genero: Genero;

    @ApiModelProperty()
    @OneToMany(() => PessoaSubgenero, (subgeneropessoa) => subgeneropessoa.subgenero, { cascade: true })
    public subgeneropessoa: PessoaSubgenero[];
}

@Entity("especie")
export class Especie {
    @ApiModelProperty()
    @PrimaryGeneratedColumn({ name: "id_especie", type: "bigint" })
    id: number;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    nome: string;

    @ApiModelProperty()
    @Column("integer", {
        nullable: true,
    })
    ano_descricao: number;

    @ApiModelProperty()
    @ManyToOne((type) => Genero, { nullable: true })
    @JoinColumn({ name: "id_genero", referencedColumnName: "id" })
    public genero: Genero;

    @ApiModelProperty()
    @ManyToOne((type) => Subgenero, { nullable: true })
    @JoinColumn({ name: "id_subgenero", referencedColumnName: "id" })
    public subgenero: Subgenero;

    @ApiModelProperty()
    @ManyToOne((type) => Pessoa, { nullable: true })
    @JoinColumn({ name: "id_pessoa", referencedColumnName: "id" })
    public pessoa: Pessoa;

    @ApiModelProperty()
    @ManyToOne((type) => Especie)
    @JoinColumn({ name: "parent_id_especie", referencedColumnName: "id" })
    public parent_id_especie: Especie;

    @ApiModelProperty()
    @OneToMany(() => PessoaEspecie, (especiepessoa) => especiepessoa.especie, { cascade: true })
    public especiepessoa: PessoaEspecie[];

    @ApiModelProperty()
    @ManyToMany((type) => Trabalho, (trabalho) => trabalho.especies, { cascade: true })
    @JoinTable({
        name: "trabalho_especie",
        joinColumn: { name: "id_trabalho", referencedColumnName: "id" },
        inverseJoinColumn: { name: "id_especie", referencedColumnName: "id" },
    })
    trabalhos: Trabalho[];
}
