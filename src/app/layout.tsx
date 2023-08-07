import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Image from "next/image"

const inter = Inter({ subsets: ["latin"] })

const imgUrls: string[] = [
	"https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png",
	"https://upload.wikimedia.org/wikipedia/en/thumb/5/54/Next_2007-_logo.svg/2560px-Next_2007-_logo.svg.png",
	"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
	"https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/tailwind-css-icon.png",
]

export const metadata: Metadata = {
	title: "Dollar Calculator",
	description: "Created by Suka",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<main className="bg-emerald-100 h-screen flex items-center justify-center">
					<div className="max-w-screen-md mx-auto flex-1 px-4 flex flex-col gap-8">
						<div className="bg-white rounded-3xl shadow-lg grid w-full p-8 flex-1">
							{children}
						</div>
						<section className="text-gray-600 flex flex-col items-center gap-2">
							<p>Made with</p>
							<ul className="flex items-center gap-4">
								{imgUrls.map((url, index) => (
									<li
										className="list-none flex items-center justify-center w-10 h-10"
										key={index}
									>
										<Image
											src={url}
											width={50}
											height={50}
											alt={`Image ${index}`}
										/>
									</li>
								))}
							</ul>
						</section>
					</div>
				</main>
			</body>
		</html>
	)
}
