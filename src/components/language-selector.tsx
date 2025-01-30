"use client";

import { languages } from "@/languages";
import { cn } from "@/utils";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useMediaQuery } from "react-responsive";

const locales = Object.entries(languages);

const LanguageSelector = () => {
	const t = useTranslations("Index");
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const [_, currentLocale] = pathname.split("/");

	const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

	const buildHref = (locale: string) => {
		const params = new URLSearchParams(searchParams);
		return `/${locale}${pathname.substring(3)}?${params.toString()}`;
	};

	return (
		<div className="flex items-center">
			{locales.map(([locale, label], index) => (
				<Link
					key={locale}
					href={buildHref(locale)}
					className={cn(
						"block transition-opacity hover:opacity-100",
						"text-xl text-shadow-pop",
						locale === currentLocale ? "opacity-100" : "opacity-60",
					)}
					prefetch
				>
					{isMobile ? locale.toUpperCase() : label}
					{index < locales.length - 1 && <span className="mx-2">|</span>}
				</Link>
			))}
		</div>
	);
};

export default LanguageSelector;
