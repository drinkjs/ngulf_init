import { Entity, Column, PrimaryGeneratedColumn } from "ngulf/typeorm";

@Entity({ name: "user" })
export default class UserEntity {
	@PrimaryGeneratedColumn("uuid")
		id!: string;

	@Column({ type: "varchar" })
		name!: string;

	@Column({ type: "int" })
		age?: number;
}
