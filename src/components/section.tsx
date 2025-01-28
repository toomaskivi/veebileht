import { useTranslations } from "next-intl";

type SectionProps = {
	sectionId: string;
};

const Section = (props: SectionProps) => {
	const { sectionId } = props;
	const t = useTranslations("Index");

	return (
		<div className="pt-48 md:pt-20 px-8 absolute text-center text-white md:right-auto md:top-1/4 md:left-1/4 md:-translate-x-0 md:-translate-y-0">
			<h1
				className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-shadow-pop text-right"
				style={{ fontFamily: "var(--font-chivo)" }}
			>
				{t(`sections.${sectionId}.title`)}
			</h1>
			<div
				className="text-lg md:text-xl max-w-2xl mx-auto text-xl leading-relaxed text-shadow-pop text-left"
				dangerouslySetInnerHTML={{
					__html: t.raw(`sections.${sectionId}.description`),
				}}
			/>
		</div>
	);
};

export default Section;
