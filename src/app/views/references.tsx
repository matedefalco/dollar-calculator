import Image from "next/image"

const imgUrls: string[] = [
	"https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png",
	"https://upload.wikimedia.org/wikipedia/en/thumb/5/54/Next_2007-_logo.svg/2560px-Next_2007-_logo.svg.png",
	"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
	"https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/tailwind-css-icon.png",
]

export default function References() {
	return (
		<section className="text-gray-600 flex flex-col items-center gap-2">
			<p>Made with:</p>
			<ul className="flex items-center gap-4">
				{imgUrls.map((url, index) => (
					<li
						className="list-none flex items-center justify-center w-10 h-10"
						key={index}
					>
						<Image src={url} width={50} height={50} alt={`Image ${index}`} />
					</li>
				))}
			</ul>
		</section>
	)
}
