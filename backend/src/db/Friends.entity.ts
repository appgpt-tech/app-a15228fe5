//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Friends')
export class FriendsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('integer', { nullable: true })
  playerUsername: number;

  @Column('integer', { nullable: true })
  friendUsername: number;

  @Column('text', { nullable: true })
  status: string;
}