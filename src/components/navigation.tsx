import { sections } from "@/sections";
import { cn } from "@/utils";
import { useTranslations } from "next-intl";
import Link from "next/link";
import LanguageSelector from "./language-selector";

type NavigationProps = {
	currentSection: number;
	scrollToSection: (index: number) => void;
};

const Navigation = (props: NavigationProps) => {
	const { currentSection, scrollToSection } = props;
	const t = useTranslations("Index");

	return (
		<nav>
			<div className="absolute top-8 right-8 z-10 overflow-hidden">
				<LanguageSelector />
			</div>
			<div className="absolute top-8 left-8 flex flex-col z-10">
				<Link
					href="/"
					className="text-2xl font-medium tracking-tight text-shadow-pop"
					style={{ fontFamily: "var(--font-museo-moderno)" }}
				>
					{t("title")}
				</Link>
				<p className="text-sm opacity-80 text-shadow-pop">{t("subtitle")}</p>
			</div>
			<div className="absolute bottom-40 left-8 space-y-2 hidden md:block z-10">
				{sections.map((section, index) => (
					<button
						type="button"
						key={section.id}
						onClick={() => scrollToSection(index)}
						className={cn(
							"block transition-opacity hover:opacity-100",
							"text-2xl text-shadow-pop",
							currentSection === index ? "opacity-100" : "opacity-60",
							currentSection === index && "underline",
							currentSection === index && "pl-4 transition-padding",
						)}
					>
						{t(`sections.${section.id}.title`)}
					</button>
				))}
			</div>
		</nav>
	);
};

export default Navigation;
