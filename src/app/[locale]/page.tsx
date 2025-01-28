"use client";

import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import Section from "@/components/section";
import useSections from "@/hooks/use-sections";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

export default function Home() {
	const t = useTranslations("Index");
	const { sections, activeSection, scrollToSection } = useSections();

	const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

	return (
		<main className="h-screen overflow-hidden">
			<div className="h-full overflow-y-auto snap-y snap-mandatory">
				<Navigation
					currentSection={activeSection}
					scrollToSection={scrollToSection}
				/>
				{sections.map((section, index) => (
					<section
						key={section.id}
						id={section.id}
						ref={section.observer.ref}
						className="relative h-screen snap-start"
					>
						<Image
							src={section.background}
							alt={t(`sections.${section.id}.title`)}
							fill
							className="object-cover"
							priority={index === 0}
							style={{
								objectPosition:
									isMobile && !!section.mobileBackgroundOffset
										? section.mobileBackgroundOffset
										: "center",
							}}
						/>
						<div className="absolute inset-0 bg-black/20" />

						<Section sectionId={section.id} />
					</section>
				))}
				<Footer />
			</div>
		</main>
	);
}
