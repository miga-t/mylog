import Image from "next/image";
import { Inter } from "next/font/google";
import markdownit from "markdown-it";
const inter = Inter({ subsets: ["latin"] });
import Posts from "@/app/components/Posts";
import Link from "next/link";
import TechStacks from "./components/TechStacks";

export default function Home() {
	return (
		<main className="px-6 mx-auto prose">
			<section className="border-b-2 border-gray-900 p-2 m-3">
				<h2 className="mt-6 mb-6 text-2xl">経歴</h2>
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
			<section className="border-b-2 border-gray-900 p-3 m-3 ">
				<h2 className="mt-6 mb-6 text-2xl">Products / Portfolio</h2>
				<ul>
					<li className="border-dashed border-b-2 border-gray-900 mt-3">
						<Link
							className="underline text-3xl text-red-600 hover:text-red-400 animate-pulse mt-3"
							href={`https://freebox.vercel.app/`}
							target="_blank"
							rel="noopener noreferrer"
						>
							FreeBox
						</Link>
						<p>
							著作権保護期間が終了した作品や自由に配布が許可された映像作品が見られます。
							<br />* Loginする場合は、email: test,password: test
							で入力してください。
						</p>

						<TechStacks />
						<h3 className="text-xl">FreeBoxのイメージ</h3>
						<Image
							src="/images/FreeBox.png"
							width={2042}
							height={1558}
							alt="No image"
							priority
						></Image>
					</li>
					<li className="mt-3">
						<Link
							className="underline text-3xl text-red-600 hover:text-red-400 animate-pulse"
							href={`https://tweetbox.vercel.app/`}
							target="_blank"
							rel="noopener noreferrer"
						>
							TweetBox
						</Link>
						<p>
							Twitterのクローンアプリです。
							<br />* Loginする場合は、email: test,password: test
							で入力してください。
						</p>
						<TechStacks />
						<h3 className="text-xl">TweetBoxのイメージ</h3>
						<Image
							src="/images/TweetBox.png"
							width={2064}
							height={1668}
							alt="No image"
							priority
						></Image>
					</li>
				</ul>
			</section>
			<section className="border-b-2 border-gray-900 p-3 m-3">
				<h2 className="mt-6 mb-6 text-2xl">Contacts</h2>
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
