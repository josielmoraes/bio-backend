import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { ApiModelProperty } from "@nestjs/swagger";
import { Trabalho } from "./trabalho.entity";
@Entity("auto_trabalho")
export class Autotrabalho {
    @ApiModelProperty()
    @PrimaryGeneratedColumn({ name: "id_autotrabalho", type: "bigint" })
    id: number;

    @ManyToOne(() => Trabalho, (trabalho) => trabalho.trabalho_referencia)
    @JoinColumn({ name: "id_trabalho_referencia", referencedColumnName: "id" })
    public referencia: Trabalho;

    @ManyToOne(() => Trabalho, (trabalho) => trabalho.trabalho_atual)
    @JoinColumn({ name: "id_trabalho_atual", referencedColumnName: "id" })
    public atual: Trabalho;
}
