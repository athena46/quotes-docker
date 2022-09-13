import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class QuotesEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    quote: string;

    @Column()
    author: string;

    @Column({default: 0})
    likes: number;


    @Column({default: 0})
    dislikes: number;

    @Column()
    tags:string;
    


}