import {
	Body,
	Controller,
	Delete,
	Get,
	Headers,
	Post,
	Put,
	Query,
	RouterContext,
	Validation,
} from "ngulf";
import UserDto from "@/dto/UserDto";
import { AddZodUser, ZodUser } from "@/dto/ZodDto";

@Controller("/test")
export default class TestController {
	@Get("/get")
	async testGet(@Query("name") name: string, ctx: RouterContext) {
		ctx.res.header("Access-Control-Allow-Origin", "*");
		return name;
	}

	@Post("/post")
	async testPost(@Body() data: { name: string }) {
		return data;
	}

	@Put("/put")
	async testPut(@Body() data: { name: string }) {
		return data;
	}

	@Delete("/delete")
	async testDelete(@Query() data: { name: string }) {
		return data;
	}

	@Get("/headers")
	async testHeaders(@Headers("x-name") name: string) {
		return name;
	}

	@Post("/post/headers")
	async testPostHeaders(
		@Body("name") firstName: string,
		@Headers("x-name") lastName: string
	) {
		return { firstName, lastName };
	}

	@Post("/validator")
	async testValidator(@Body(new Validation({ groups: ["add"] })) dto: UserDto) {
		return dto;
	}

	@Post("/zod")
	async testZod(@Body(ZodUser) data: AddZodUser) {
		console.log(data);
		return data.username;
	}
}
