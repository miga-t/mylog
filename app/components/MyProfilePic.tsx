import Image from "next/image";

export default function MyProfilePic() {
	return (
		<section className="w-full mx-auto">
			<Image
				className="border-4 border-black drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
				src="/images/kkrn_icon_user_6.png"
				width={200}
				height={200}
				alt="John Doe"
				priority={true}
			/>
		</section>
	);
}
