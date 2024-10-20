import { FC } from "react";

import Image from "next/image";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Article } from "@/lib/types/articles";

import { Link } from "@navigation";

export const ArticleCard: FC<Article> = async ({ description, imageSrc, subTitle, title, id }) => {
	return (
		<Card>
			<Link href={`/${id}`}>
				<div className="relative" style={{ height: `200px` }}>
					<Image
						src={imageSrc || ""}
						alt={title}
						fill
						sizes="(max-width: 768px) 100vw, 50vw"
						style={{ objectFit: "cover" }}
					/>
				</div>
				<CardHeader>
					<CardTitle>{title}</CardTitle>
					<CardDescription>{subTitle}</CardDescription>
				</CardHeader>

				<CardContent>{description}</CardContent>
			</Link>
		</Card>
	);
};
