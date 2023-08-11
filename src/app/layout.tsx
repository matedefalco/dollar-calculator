import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import References from "./views/references"

const inter = Inter({ subsets: ["latin"] })

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
						{/* REFERENCES */}
						<References />
					</div>
				</main>
			</body>
		</html>
	)
}
