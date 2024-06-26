//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Chat')
export class ChatEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  chatID: string;

  @Column('integer', { nullable: true })
  senderUsername: number;

  @Column('integer', { nullable: true })
  receiverUsername: number;

  @Column('text', { nullable: true })
  message: string;

  @Column('date', { nullable: true })
  timestamp: Date;
}
