import { IsNotEmpty, IsNumber } from "ngulf/class-validator";

export default class UserDto {
	@IsNotEmpty({ groups: ["add"], message: "name不能为空" })
		name!: string;

	@IsNumber(undefined, { groups: ["add", "update"] })
		age?: number;
}
