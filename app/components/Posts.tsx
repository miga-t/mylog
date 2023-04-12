import { getSortedPostsData } from "@/lib/posts";
import ListItem from "./ListItem";

export default function Posts() {
	const posts = getSortedPostsData();

	return (
		<section className="mt-6 mx-auto max-w-2xl ">
			<h2 className="text-3xl font-bold my-8 ml-2">Blog (Dummy Posts)</h2>
			<ul className="w-full">
				{posts.map((post) => (
					<ListItem key={post.id} post={post} />
				))}
			</ul>
		</section>
	);
}
