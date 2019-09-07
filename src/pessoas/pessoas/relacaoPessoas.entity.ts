import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { ApiModelProperty } from "@nestjs/swagger";
import { Pessoa } from "./pessoa.entity";
import {
    Reino,
    Filo,
    Classe,
    Ordem,
    Familia,
    Subfamilia,
    Supertribo,
    Tribo,
    Subtribo,
    Genero,
    Subgenero,
    Especie,
} from "../../taxonomias/taxonomias/taxonomia.entity";
import { Trabalho } from "../../trabalhos/trabalhos/trabalho.entity";

@Entity("pessoa_reino")
export class PessoaReino {
    @ApiModelProperty()
    @PrimaryGeneratedColumn({ name: "id", type: "bigint" })
    id: number;

    @ManyToOne(() => Pessoa, (pessoa) => pessoa.pessorareino)
    @JoinColumn({ name: "id_pessoa", referencedColumnName: "id" })
    public pessoa: Pessoa;

    @ManyToOne(() => Reino, (reino) => reino.reinopessoa)
    @JoinColumn({ name: "id_reino", referencedColumnName: "id" })
    public reino: Reino;

    @Column("int", {
        nullable: true,
    })
    public ano: number;

    @Column("int", {
        nullable: true,
    })
    public ordem: number;
}

@Entity("pessoa_filo")
export class PessoaFilo {
    @ApiModelProperty()
    @PrimaryGeneratedColumn({ name: "id", type: "bigint" })
    id: number;

    @ManyToOne(() => Pessoa, (pessoa) => pessoa.pessoafilo)
    @JoinColumn({ name: "id_pessoa", referencedColumnName: "id" })
    public pessoa: Pessoa;

    @ManyToOne(() => Filo, (filo) => filo.filopessoa)
    @JoinColumn({ name: "id_filo", referencedColumnName: "id" })
    public filo: Filo;

    @Column("int", {
        nullable: true,
    })
    public ano: number;

    @Column("int", {
        nullable: true,
    })
    public ordem: number;
}

@Entity("pessoa_classe")
export class PessoaClasse {
    @ApiModelProperty()
    @PrimaryGeneratedColumn({ name: "id", type: "bigint" })
    id: number;

    @ManyToOne(() => Pessoa, (pessoa) => pessoa.pessoaclasse)
    @JoinColumn({ name: "id_pessoa", referencedColumnName: "id" })
    public pessoa: Pessoa;

    @ManyToOne(() => Classe, (classe) => classe.classepessoa)
    @JoinColumn({ name: "id_classe", referencedColumnName: "id" })
    public classe: Classe;

    @Column("int", {
        nullable: true,
    })
    public ano: number;

    @Column("int", {
        nullable: true,
    })
    public ordem: number;
}

@Entity("pessoa_ordem")
export class PessoaOrdem {
    @ApiModelProperty()
    @PrimaryGeneratedColumn({ name: "id", type: "bigint" })
    id: number;

    @ManyToOne(() => Pessoa, (pessoa) => pessoa.pessoaordem)
    @JoinColumn({ name: "id_pessoa", referencedColumnName: "id" })
    public pessoa: Pessoa;

    @ManyToOne(() => Ordem, (Ordem) => Ordem.ordempessoa)
    @JoinColumn({ name: "id_ordem", referencedColumnName: "id" })
    public Ordem: Ordem;

    @Column("int", {
        nullable: true,
    })
    public ano: number;

    @Column("int", {
        nullable: true,
    })
    public ordem: number;
}

@Entity("pessoa_familia")
export class PessoaFamilia {
    @ApiModelProperty()
    @PrimaryGeneratedColumn({ name: "id", type: "bigint" })
    id: number;

    @ManyToOne(() => Pessoa, (pessoa) => pessoa.pessoafamilia)
    @JoinColumn({ name: "id_pessoa", referencedColumnName: "id" })
    public pessoa: Pessoa;

    @ManyToOne(() => Familia, (familia) => familia.familiapessoa)
    @JoinColumn({ name: "id_familia", referencedColumnName: "id" })
    public familia: Familia;

    @Column("int", {
        nullable: true,
    })
    public ano: number;

    @Column("int", {
        nullable: true,
    })
    public ordem: number;
}

@Entity("pessoa_subfamilia")
export class PessoaSubfamilia {
    @ApiModelProperty()
    @PrimaryGeneratedColumn({ name: "id", type: "bigint" })
    id: number;

    @ManyToOne(() => Pessoa, (pessoa) => pessoa.pessoasubfamilia)
    @JoinColumn({ name: "id_pessoa", referencedColumnName: "id" })
    public pessoa: Pessoa;

    @ManyToOne(() => Subfamilia, (subfamilia) => subfamilia.subfamiliapessoa)
    @JoinColumn({ name: "id_subfamilia", referencedColumnName: "id" })
    public subfamilia: Subfamilia;

    @Column("int", {
        nullable: true,
    })
    public ano: number;

    @Column("int", {
        nullable: true,
    })
    public ordem: number;
}

@Entity("pessoa_supertribo")
export class PessoaSupertribo {
    @ApiModelProperty()
    @PrimaryGeneratedColumn({ name: "id", type: "bigint" })
    id: number;

    @ManyToOne(() => Pessoa, (pessoa) => pessoa.pessoasupertribo)
    @JoinColumn({ name: "id_pessoa", referencedColumnName: "id" })
    public pessoa: Pessoa;

    @ManyToOne(() => Supertribo, (supertribo) => supertribo.supertribopessoa)
    @JoinColumn({ name: "id_supertribo", referencedColumnName: "id" })
    public supertribo: Supertribo;

    @Column("int", {
        nullable: true,
    })
    public ano: number;

    @Column("int", {
        nullable: true,
    })
    public ordem: number;
}

@Entity("pessoa_tribo")
export class PessoaTribo {
    @ApiModelProperty()
    @PrimaryGeneratedColumn({ name: "id", type: "bigint" })
    id: number;

    @ManyToOne(() => Pessoa, (pessoa) => pessoa.pessoatribo)
    @JoinColumn({ name: "id_pessoa", referencedColumnName: "id" })
    public pessoa: Pessoa;

    @ManyToOne(() => Tribo, (tribo) => tribo.tribopessoa)
    @JoinColumn({ name: "id_tribo", referencedColumnName: "id" })
    public tribo: Tribo;

    @Column("int", {
        nullable: true,
    })
    public ano: number;

    @Column("int", {
        nullable: true,
    })
    public ordem: number;
}

@Entity("pessoa_subtribo")
export class PessoaSubtribo {
    @ApiModelProperty()
    @PrimaryGeneratedColumn({ name: "id", type: "bigint" })
    id: number;

    @ManyToOne(() => Pessoa, (pessoa) => pessoa.pessoasubtribo)
    @JoinColumn({ name: "id_pessoa", referencedColumnName: "id" })
    public pessoa: Pessoa;

    @ManyToOne(() => Subtribo, (subtribo) => subtribo.subtribopessoa)
    public subtribo: Subtribo;

    @Column("int", {
        nullable: true,
    })
    public ano: number;

    @Column("int", {
        nullable: true,
    })
    public ordem: number;
}

@Entity("pessoa_genero")
export class PessoaGenero {
    @ApiModelProperty()
    @PrimaryGeneratedColumn({ name: "id", type: "bigint" })
    id: number;

    @ManyToOne(() => Pessoa, (pessoa) => pessoa.pessoagenero)
    @JoinColumn({ name: "id_pessoa", referencedColumnName: "id" })
    public pessoa: Pessoa;

    @ManyToOne(() => Genero, (genero) => genero.generopessoa)
    @JoinColumn({ name: "id_genero", referencedColumnName: "id" })
    public genero: Genero;

    @Column("int", {
        nullable: true,
    })
    public ano: number;

    @Column("int", {
        nullable: true,
    })
    public ordem: number;
}

@Entity("pessoa_subgenero")
export class PessoaSubgenero {
    @ApiModelProperty()
    @PrimaryGeneratedColumn({ name: "id", type: "bigint" })
    id: number;

    @ManyToOne(() => Pessoa, (pessoa) => pessoa.pessoasubgenero)
    @JoinColumn({ name: "id_pessoa", referencedColumnName: "id" })
    public pessoa: Pessoa;

    @ManyToOne(() => Subgenero, (subgenero) => subgenero.subgeneropessoa)
    @JoinColumn({ name: "id_subgenero", referencedColumnName: "id" })
    public subgenero: Subgenero;

    @Column("int", {
        nullable: true,
    })
    public ano: number;

    @Column("int", {
        nullable: true,
    })
    public ordem: number;
}

@Entity("pessoa_especie")
export class PessoaEspecie {
    @ApiModelProperty()
    @PrimaryGeneratedColumn({ name: "id", type: "bigint" })
    id: number;

    @ManyToOne(() => Pessoa, (pessoa) => pessoa.pessoasubgenero)
    @JoinColumn({ name: "id_pessoa", referencedColumnName: "id" })
    public pessoa: Pessoa;

    @ManyToOne(() => Especie, (subgenero) => subgenero.especiepessoa)
    @JoinColumn({ name: "id_especie", referencedColumnName: "id" })
    public especie: Especie;

    @Column("int", {
        nullable: true,
    })
    public ano: number;

    @Column("int", {
        nullable: true,
    })
    public ordem: number;
}

@Entity("pessoa_trabalho")
export class PessoaTrabalho {
    @ApiModelProperty()
    @PrimaryGeneratedColumn({ name: "id", type: "bigint" })
    id: number;

    @ManyToOne(() => Pessoa, (pessoa) => pessoa.pessoatrabalho)
    @JoinColumn({ name: "id_pessoa", referencedColumnName: "id" })
    public pessoa: Pessoa;

    @ManyToOne(() => Trabalho, (trabalho) => trabalho.trabalhopessoa)
    @JoinColumn({ name: "id_trabalho", referencedColumnName: "id" })
    public trabalho: Trabalho;

    @Column("int", {
        nullable: true,
    })
    public ano: number;

    @Column("int", {
        nullable: true,
    })
    public ordem: number;
}
