import { promises as fs } from "fs";

import { articleSchema } from "@/lib/schema/article";

import * as m from "@i18n"
import { languageTag } from "@i18n/utils";

export const getAllArticles = async () => {
	// TODO: This did not work as expected - want to discuss
	// const allArticles = await fetch(`127.0.0.1:3000/api`).then((res) => res.json());

	// Mock a fetch-like behaviour
	const response = await fs.readFile(`${process.cwd()}/lib/mock-data/${languageTag()}.json`, "utf8");

	const validatedData = articleSchema.array().safeParse(JSON.parse(response));

	if (!validatedData.success) {
		throw new Error(m.error__invalid_data());
	}

	return validatedData.data;
};

export const getArticleById = async (id: string) => {
	// TODO: Repeating logic
	const response = await fs.readFile(`${process.cwd()}/lib/mock-data/${languageTag()}.json`, "utf8");

	const validatedData = articleSchema.array().safeParse(JSON.parse(response));

	if (!validatedData.success) {
		throw new Error(validatedData.error.message);
	}

	const foundArticle = validatedData.data.find((article) => article.id === id);

	if (!foundArticle) {
		throw new Error(m.error__not_found());
	}

	return foundArticle;
};
