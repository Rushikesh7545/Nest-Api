import { Column, Entity,PrimaryGeneratedColumn, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;


  @Column()
  Company_Id: number;

  @Column()
  Company_Name: string;

  @Column()
  Company_City: string;
}