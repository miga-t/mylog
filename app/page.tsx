import Image from "next/image";
import { Inter } from "next/font/google";
import markdownit from "markdown-it";
const inter = Inter({ subsets: ["latin"] });
import Posts from "@/app/components/Posts";
import Link from "next/link";
import TechStacks from "./components/TechStacks";
import { FaGithub } from "react-icons/fa";

export default function Home() {
	return (
		<main className="px-6 mx-auto prose">
			<section className="border-b-2 border-gray-900 p-2 m-3">
				<h2 className="mt-6 mb-6 text-3xl">経歴</h2>
				<ul className="pl-0">
					<li className="list-none">2023年5月~ 株式会社····</li>
				</ul>
			</section>
			<Posts />
			<section className="border-b-2 border-gray-900 p-1 m-3 ">
				<h2 className="mt-6 mb-6 text-2xl">個人開発 </h2>
				<ul>
					<li className="border-dashed border-b-2 border-gray-900 mt-3">
						<div className="flex flex-row items-end gap-4">
							<div className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 hover:from-fuchsia-500 hover:via-indigo-500  hover:to-rose-400  transition p-2 rounded-md">
								<Link
									className="underline text-3xl text-green-400 hover:text-green-300 "
									href={`https://freebox.vercel.app/`}
									target="_blank"
									rel="noopener noreferrer"
								>
									FreeBox
								</Link>
							</div>
							<Link
								className="hover:text-purple-400"
								href="https://github.com/miga-t/freebox"
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="flex flex-row items-center gap-1">
									<FaGithub />
									GitHubで見る
								</div>
							</Link>
						</div>
						<p>
							著作権保護期間が終了した作品や自由に配布が許可された映像作品が見られます。
							<br />* Loginする場合は、email:
							<strong>test</strong>,password:
							<strong>test</strong>
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
						<div className="flex flex-row items-end gap-4">
							<Link
								className="underline text-3xl text-red-600 hover:text-red-400 animate-pulse"
								href={`https://tweetbox.vercel.app/`}
								target="_blank"
								rel="noopener noreferrer"
							>
								TweetBox
							</Link>
							<Link
								className="hover:text-purple-400"
								href="https://github.com/miga-t/tweetbox"
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="flex flex-row items-center gap-1">
									<FaGithub />
									GitHubで見る
								</div>
							</Link>
						</div>

						<p>
							Twitterのクローンアプリです。
							<br />* Loginする場合は、email:{" "}
							<strong>test@email.com</strong>
							,password: <strong>test</strong>{" "}
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
		</main>
	);
}
