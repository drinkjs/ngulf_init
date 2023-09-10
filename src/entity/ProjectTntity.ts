import { prop } from "ngulf/typegoose";

export default class Project {
	@prop({ required: true })
		name!: string;

	@prop()
		type?: string;
}
