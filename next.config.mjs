import { paraglide } from "@inlang/paraglide-next/plugin";

import dns from "dns";

dns.setDefaultResultOrder("ipv4first");

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		localPatterns: [
			{
				pathname: "/images/**",
				search: "",
			},
		],
	},
};

export default paraglide({
	paraglide: {
		project: "./lib/translations/project.inlang",
		outdir: "./lib/translations/translations_cache",
	},
	...nextConfig,
});
