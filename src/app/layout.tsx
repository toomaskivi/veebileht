import { Chivo, MuseoModerno } from "next/font/google";
import "./globals.css";
import { type ReactNode, Suspense } from "react";
import { Analytics } from '@vercel/analytics/next';

const chivo = Chivo({
	subsets: ["latin"],
	variable: "--font-chivo",
});

const museoModerno = MuseoModerno({
	subsets: ["latin"],
	variable: "--font-museo-moderno",
});

export default async function RootLayout({
	children,
	params,
}: {
	children: ReactNode;
	params: Promise<{ locale: string }>;
}) {
	const { locale } = params ? await params : { locale: "et" };

	return (
		<html lang={locale} className={`${chivo.variable} ${museoModerno.variable}`}>
			<body className={chivo.className}>
			<Suspense fallback={null}>{children}</Suspense>
				<Analytics />
			</body>
		</html>
	);
}
