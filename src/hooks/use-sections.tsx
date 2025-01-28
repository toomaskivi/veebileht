"use client";

import {
	type Section as SiteSection,
	sections as siteSections,
} from "@/sections";
import { type SetStateAction, useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const intersectionOptions = { threshold: 0.2, triggerOnce: false };

export type Section = SiteSection & {
	observer: ReturnType<typeof useInView>;
};

export default function useSections() {
	const [activeSection, setActiveSection] = useState(0);

	const sections: Section[] = siteSections.map((section) => ({
		...section,
		observer: useInView(intersectionOptions),
	}));

	const scrollToSection = useCallback((index: number) => {
		sections[index].observer.entry?.target.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
		setActiveSection(index);
	}, [sections]);

	const handleInitialiseSections = useCallback(() => {
		const inViewIndexOrder: SetStateAction<number>[] = [];

		sections
			.map(({ observer }) => observer)
			.sort(
				(a, b) =>
					(a?.entry?.boundingClientRect?.top ?? 0) -
					(b?.entry?.boundingClientRect?.top ?? 0),
			)
			.forEach(({ inView }, index) => inView && inViewIndexOrder.push(index));

		setActiveSection(inViewIndexOrder[0]);
	}, [sections]);

	useEffect(() => handleInitialiseSections(), [handleInitialiseSections]);

	const handleKeyDown = useCallback(
		(event: KeyboardEvent) => {
			if (event.key === "ArrowUp" || event.key === "ArrowDown") {
				event.preventDefault();
				const newIndex =
					event.key === "ArrowUp"
						? (activeSection - 1 + sections.length) % sections.length
						: (activeSection + 1) % sections.length;
				scrollToSection(newIndex);
			}
		},
		[activeSection, sections.length, scrollToSection],
	);

	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);

		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [handleKeyDown]);

	return { sections, activeSection, scrollToSection };
}
