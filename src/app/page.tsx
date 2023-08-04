import Image from "next/image"

export default function Home() {
	return (
		<>
			<main className="flex gap-4  h-full">
				<section className="flex-1 text-black">Left</section>
				<section className="bg-emerald-800 flex-1 rounded-3xl p-8 text-white">
					Right
				</section>
			</main>
		</>
	)
}
