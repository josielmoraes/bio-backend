import { Instituicao } from "./../../instituicoes/instituicoes/instituicao.entity";
import { Endereco } from "./../../enderecos/enderecos/endereco.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { ApiModelProperty } from "@nestjs/swagger";
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
    PessoaTrabalho,
} from "./relacaoPessoas.entity";

@Entity("pessoa")
export class Pessoa {
    @ApiModelProperty()
    @PrimaryGeneratedColumn({ name: "id_pessoa", type: "bigint" })
    id: number;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    nome_curto: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    apelido: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    nome_completo: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    abreviacao_sobrenome: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    nacionalidade: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    email: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    telefone: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    instituicao: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    cargo: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    telefone_de_trabalho: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
    })
    anotacao: string;

    @ApiModelProperty()
    @ManyToOne((type) => Endereco)
    @JoinColumn({ name: "id_endereco", referencedColumnName: "id" })
    public endereco: Endereco;

    @ApiModelProperty()
    @ManyToOne((type) => Instituicao)
    @JoinColumn({ name: "id_instituicao", referencedColumnName: "id" })
    public id_instituicao: Instituicao;

    @OneToMany(() => PessoaReino, (pessorareino) => pessorareino.pessoa)
    public pessorareino: PessoaReino[];

    @OneToMany(() => PessoaFilo, (pessoafilo) => pessoafilo.pessoa)
    public pessoafilo: PessoaFilo[];

    @OneToMany(() => PessoaClasse, (pessoaclasse) => pessoaclasse.pessoa)
    public pessoaclasse: PessoaClasse[];

    @OneToMany(() => PessoaOrdem, (pessoaordem) => pessoaordem.pessoa)
    public pessoaordem: PessoaOrdem[];

    @OneToMany(() => PessoaFamilia, (pessoafamilia) => pessoafamilia.pessoa)
    public pessoafamilia: PessoaFamilia[];

    @OneToMany(() => PessoaSubfamilia, (pessoasubfamilia) => pessoasubfamilia.pessoa)
    public pessoasubfamilia: PessoaSubfamilia[];

    @OneToMany(() => PessoaSupertribo, (pessoasupertribo) => pessoasupertribo.pessoa)
    public pessoasupertribo: PessoaSupertribo[];

    @OneToMany(() => PessoaTribo, (pessoatribo) => pessoatribo.pessoa)
    public pessoatribo: PessoaTribo[];

    @OneToMany(() => PessoaSubtribo, (pessoasubtribo) => pessoasubtribo.pessoa)
    public pessoasubtribo: PessoaSubtribo[];

    @OneToMany(() => PessoaGenero, (pessoagenero) => pessoagenero.pessoa)
    public pessoagenero: PessoaGenero[];

    @OneToMany(() => PessoaSubgenero, (pessoasubgenero) => pessoasubgenero.pessoa)
    public pessoasubgenero: PessoaSubgenero[];

    @OneToMany(() => PessoaEspecie, (pessoaespecie) => pessoaespecie.pessoa)
    public pessoaespecie: PessoaEspecie[];

    @OneToMany(() => PessoaTrabalho, (pessoatrabalho) => pessoatrabalho.pessoa)
    public pessoatrabalho: PessoaTrabalho[];
}
