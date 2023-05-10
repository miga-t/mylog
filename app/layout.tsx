import Navbar from "@/app/components/Navbar";
import "./globals.css";
import MyProfilePic from "@/app/components/MyProfilePic";
import Head from "next/head";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: { default: "Blog13", template: "%s | Blog13" },
	description: "Blog13",
	icons: {
		icon: "./favicon.png"
	}
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ja">
			<body className="bg-[#fffffc] ">
				<Navbar />
				{children}
			</body>
		</html>
	);
}
