"use client";

import { LucideLanguages } from "lucide-react";

import { Link, usePathname } from "@navigation";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { AvailableLanguageTag, languageTag } from "@i18n/utils";
import * as m from "@i18n";

interface SupportedLocale {
	label: string;
	locale: AvailableLanguageTag;
}

export const LangaugeSwitch = () => {
	const pathname = usePathname();

	const supportedLocales = [
		{
			label: m.english(),
			locale: "en",
		},
		{
			label: m.spanish(),
			locale: "es",
		},
		{
			label: m.polish(),
			locale: "pl",
		},
	] satisfies SupportedLocale[];

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<Avatar className="h-10 w-10 sm:h-12 sm:w-12">
					<AvatarFallback className="border text-primary transition hover:bg-accent-foreground hover:text-secondary">
						<LucideLanguages />
					</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				{supportedLocales.map(({ locale, label }) => (
					<Link href={pathname} locale={locale} hrefLang={locale} key={locale}>
						<DropdownMenuCheckboxItem checked={locale === languageTag()}>
							{`${label} (${locale})`}
						</DropdownMenuCheckboxItem>
					</Link>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
