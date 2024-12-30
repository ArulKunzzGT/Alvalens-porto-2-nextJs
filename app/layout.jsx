import dynamic from "next/dynamic";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
	title: "Syahrul | Portofolio",
	description:
		"My name is Alvalens, I'm a web developer and I'm passionate about it. I'm currently studying at Universitas Negeri Malang.",
	author: "Syahrul Ramadan",
	siteUrl: "https://stupide.my.id",
	applicationName: "Syahrul",
	keywords: [
		"syahrul dian",
		"syahrul dian ramadan",
		"arul",
		"arul ramadan",
	],
	openGraph: {
		type: "website",
		url: "https://stupide.my.id",
		title: "Syahrul | Portofolio",
		site_name: "Syahrul | Portofolio",
		description: "My name is Syahrul, This is my portofolio website.",
		width: 1200,
		height: 630,
		images: [
			{
				url: "/og-image-rev.png",
				alt: "Arul Portofolio",
			},
		],
		site_name: "Syahrul | Portofolio",
	},
};


import Chat from "@/components/Chat";

const TopProgressBar = dynamic(() => import("@/components/TopProgressbar"), {
	ssr: false,
});



export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<TopProgressBar />
				<Navbar />
				{children}
				<Chat />
				<Analytics />
			</body>
		</html>
	);
}
