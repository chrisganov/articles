import { z } from "zod";

export const articleSchema = z.object({
	id: z.string(),
	title: z.string(),
	subTitle: z.string(),
	description: z.string(),
	content: z.string(),
	imageSrc: z.string(),
});
