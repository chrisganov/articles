"use client";

import { Button } from "@/components/ui/button";
import * as m from "@i18n";

import { useRouter } from "@navigation";

export default function Error({ error }: { error: Error & { digest?: string }; reset: () => void }) {
	const { replace } = useRouter();

	return (
		<div>
			<h2>{error.message}</h2>
			<Button onClick={() => replace("/")}>{m.go_home()}</Button>
		</div>
	);
}
