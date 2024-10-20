"use client";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
	console.log(error.message);

	return (

		<div className="mx-auto max-w-[52rem] px-4 py-12 sm:px-6 md:px-8 lg:max-w-6xl xl:px-12">
			<h1 className="text-4xl font-bold text-center leading-none tracking-tight">{m.home__title()}</h1>
      </div>
	);
}
