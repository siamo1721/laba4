import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('messages')
export class Message {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    content: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
}