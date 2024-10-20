import { ArticleCard } from "@/components/article-card";
import { Separator } from "@/components/ui/separator";

import { getAllArticles } from "@/lib/services/articles";
import { cn } from "@/lib/utils";
import * as m from "@i18n"

export default async function Home() {
	const articles = await getAllArticles();

	return (
		<div className="mx-auto max-w-[52rem] px-4 py-12 sm:px-6 md:px-8 lg:max-w-6xl xl:px-12">
			<h1 className="text-4xl font-bold text-center leading-none tracking-tight">{m.home__title()}</h1>

			<Separator className="my-3" />

			<div className={cn("grid grid-cols-1 gap-5 md:grid-cols-2")}>
				{articles.map((article, i) => (
					<ArticleCard {...article} key={i} />
				))}
			</div>
		</div>
	);
}
