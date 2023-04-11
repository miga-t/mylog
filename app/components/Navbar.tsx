import Link from "next/link";
import { FaYoutube, FaTwitter, FaGithub, FaLaptop } from "react-icons/fa";

export default function Navbar() {
	return (
		<nav className="prose prose-xl bg-red-500 p-8 drop-shadow-xl z-10 mx-auto">
			<div className=" mx-auto flex justify-between flex-col sm:flex-row">
				<h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
					<Link
						href="/"
						className="text-white/90 no-underline hover:text-white"
					>
						Weblog
					</Link>
				</h1>
				<div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl">
					<Link
						className="text-white/90 hover:text-white"
						href="https://github.com/miga-t"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaGithub />
					</Link>
					<Link
						className="text-white/90 hover:text-white"
						href="https://twitter.com/john109info"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaTwitter />
					</Link>
				</div>
			</div>
		</nav>
	);
}
