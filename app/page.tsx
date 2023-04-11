import Image from "next/image";
import { Inter } from "next/font/google";
import markdownit from "markdown-it";
const inter = Inter({ subsets: ["latin"] });
import Posts from "@/app/components/Posts";
import Link from "next/link";

export default function Home() {
	return (
		<main className="px-6 mx-auto prose">
			<section className="border border-gray-300 p-2 m-3">
				<h3 className="mt-6 mb-6 text-2xl">経歴</h3>
				<ul className="pl-0">
					<li className="list-none">
						<Image
							className="inline ml-2"
							src="/images/Career.png"
							width={430}
							height={26}
							alt="No image"
						></Image>
					</li>
				</ul>
			</section>
			<section className="border border-gray-300 p-3 m-3">
				<h3 className="mt-6 mb-6 text-2xl">Products</h3>
				<ul>
					<li>
						<Link
							className="underline "
							href={`https://freebox.vercel.app/`}
							target="_blank"
							rel="noopener noreferrer"
						>
							FreeBox
						</Link>
					</li>
					<li>
						<Link
							className="underline "
							href={`https://tweetbox.vercel.app/`}
							target="_blank"
							rel="noopener noreferrer"
						>
							TweetBox
						</Link>
					</li>
				</ul>
			</section>
			<section className="border border-gray-300 p-3 m-3">
				<h3 className="mt-6 mb-6 text-2xl">Contacts</h3>
				<ul>
					<li>
						<p>
							GitHub:
							<Link
								className="underline hover:text-zinc-500"
								href={`https://github.com/miga-t`}
								target="_blank"
								rel="noopener noreferrer"
							>
								@miga-t
							</Link>
						</p>
					</li>
					<li>
						<p>
							Twitter:
							<Link
								className="underline hover:text-zinc-500"
								href="https://twitter.com/john109info"
								target="_blank"
								rel="noopener noreferrer"
							>
								@john109info
							</Link>
						</p>
					</li>
					<li>
						<p>
							Mail:
							<Image
								className="inline ml-2 my-4"
								src="/images/mail.png"
								width={206}
								height={21}
								alt="No mail"
							></Image>
						</p>
					</li>
				</ul>
			</section>
			<Posts />
		</main>
	);
}
