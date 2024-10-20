import articles from "@/lib/mock-data/en.json";
import Image from "next/image";

import { getArticleById } from "@/lib/services/articles";
import { Metadata, ResolvingMetadata } from "next";

interface Props {
	params: {
		id: string;
	};
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id
 
  const data = await getArticleById(id);

  // Check if parent has an image
  const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: data.title,
    description: data.description,
    openGraph: {
      images: [data.imageSrc, ...previousImages],
    },
  }
}

export async function generateStaticParams() {
	// TODO: This was done for the sake of simplicity due to tight deadline
	// Want to discuss fetch/service appraoch since I understand this is run on build time
	// const articles = await getAllArticles();

	return articles.map((article) => ({ id: article.id }));
}

export default async function ArticlePage({ params }: Props) {
	const { id } = params;

	const data = await getArticleById(id);

	return (
		<div>
			<div className="relative" style={{ height: `500px` }}>
				<Image
					src={data.imageSrc}
					alt={data.title}
					fill
					sizes="(max-width: 768px) 100vw"
					style={{ objectFit: "cover" }}
				/>
			</div>
			<div className="mx-auto max-w-[52rem] px-4 pb-28 sm:px-6 md:px-8 lg:max-w-6xl xl:px-12 pt-3">
				<h1 className="text-2xl font-semibold leading-none tracking-tight">{data.title}</h1>

				<p className="text-sm text-muted-foreground">{data.subTitle}</p>

				<h3 className="py-3">{data.content}</h3>
			</div>
		</div>
	);
}
