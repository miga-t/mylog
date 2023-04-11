import Navbar from "@/app/components/Navbar";
import "./globals.css";
import MyProfilePic from "@/app/components/MyProfilePic";

export const metadata = {
	title: "Weblog",
	description: "Weblog"
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
