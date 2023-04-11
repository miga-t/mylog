import Navbar from "@/app/components/Navbar";
import "./globals.css";
import MyProfilePic from "@/app/components/MyProfilePic";

export const metadata = {
	title: "John Doe Blog",
	description: "Generated by John Doe"
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="bg-slate-800">
				<Navbar />
				<MyProfilePic />
				{children}
			</body>
		</html>
	);
}
