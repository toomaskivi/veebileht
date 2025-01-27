import { languages } from "@/languages";
import { cn } from "@/utils";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const LanguageSelector = () => {
	const t = useTranslations("Index");
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const [_, currentLocale] = pathname.split("/");

	const buildHref = (locale: string) => {
		const params = new URLSearchParams(searchParams);
		return `/${locale}${pathname.substring(3)}?${params.toString()}`;
	};

	return (
		<div className="flex items-center">
			{languages.map((locale, index) => (
				<>
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
						{locale.toUpperCase()}
					</Link>
					{index < languages.length - 1 && <span className="mx-2">|</span>}
				</>
			))}
		</div>
	);
};

export default LanguageSelector;
