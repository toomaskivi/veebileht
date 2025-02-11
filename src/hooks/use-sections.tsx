"use client";

import {
	type Section as SiteSection,
	sections as siteSections,
} from "@/sections";
import { type SetStateAction, useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const intersectionOptions = { threshold: 0.1, triggerOnce: false };

export type Section = SiteSection & {
	observer: ReturnType<typeof useInView>;
};

export default function useSections() {
	const [activeSection, setActiveSection] = useState(0);

	const sections: Section[] = siteSections.map((section) => {
		const observer = useInView(intersectionOptions);
		return { ...section, observer };
	});

	const scrollToSection = useCallback(
		(index: number) => {
			sections[index].observer.entry?.target.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		},
		[sections],
	);

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

	const handleKeyUp = useCallback(
		(event: KeyboardEvent) => {
			if (event.key === "ArrowUp" || event.key === "ArrowDown") {
				event.preventDefault();
				let newIndex = activeSection;
				if (event.key === "ArrowUp") {
					newIndex = Math.max(activeSection - 1, 0);
				} else if (event.key === "ArrowDown") {
					newIndex = Math.min(activeSection + 1, sections.length - 1);
				}

				if (newIndex !== activeSection) {
					scrollToSection(newIndex);
				}
			}
		},
		[activeSection, sections.length, scrollToSection],
	);

	useEffect(() => {
		window.addEventListener("keyup", handleKeyUp);

		return () => window.removeEventListener("keyup", handleKeyUp);
	}, [handleKeyUp]);

	return { sections, activeSection, scrollToSection };
}
