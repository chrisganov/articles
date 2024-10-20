import { LanguageProvider } from "@inlang/paraglide-next";

import type { Metadata } from "next";
import localFont from "next/font/local";

import * as m from "@i18n";
import { languageTag } from "@i18n/utils";

import { LangaugeSwitch } from "@/components/language-switch";

import "./globals.css";

const geistSans = localFont({
	src: "/fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "/fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export async function generateMetadata(): Promise<Metadata> {
	return { title: m.seo__app__title(), description: m.seo__app__description() };
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<LanguageProvider>
			<html lang={languageTag()}>
				<body className={`${geistSans.variable} ${geistMono.variable} min-w-screen relative min-h-screen antialiased`}>
					<aside className="fixed bottom-5 right-5">
						<LangaugeSwitch />
					</aside>

					<main>{children}</main>
				</body>
			</html>
		</LanguageProvider>
	);
}
