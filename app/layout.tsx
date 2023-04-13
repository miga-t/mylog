import Navbar from "@/app/components/Navbar";
import "./globals.css";
import MyProfilePic from "@/app/components/MyProfilePic";
import Head from "next/head";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: { default: "Weblog", template: "%s | Weblog" },
	description: "Weblog",
	icons: {
		icon: "/favicon.png"
	}
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="bg-slate-100 ">
				<Navbar />
				{children}
			</body>
		</html>
	);
}
