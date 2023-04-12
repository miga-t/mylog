import React from "react";

const TechStacks = () => {
	return (
		<section>
			<h3 className="text-xl">使用技術</h3>
			<section>
				<h4 className="ml-2">Application</h4>
				<ul>
					<li>React</li>
					<li>Next.js</li>
					<li>TypeScript</li>
					<li>Tailwind CSS</li>
					<li>Prisma ORM</li>
				</ul>
			</section>
			<section>
				<h4 className="ml-2">Database</h4>
				<ul>
					<li>MongoDB Atlas</li>
					<li>Google Cloud Storage</li>
				</ul>
			</section>
		</section>
	);
};

export default TechStacks;
