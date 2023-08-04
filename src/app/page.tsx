"use client"

import React, { useState } from "react"
import cotizaciones from "../cotizaciones.json"
import Form from "./components/Form"

// Definir el tipo para las cotizaciones
type Cotizacion = {
	compra: number
	venta: number
}

// Crear un objeto de cotizaciones con el tipo definido
const COTIZACIONES: Record<string, Cotizacion> = cotizaciones

export default function Home() {
	const [amount, setAmount] = useState(0)

	return (
		<div>
			<main className="gap-8 grid">
				<section className="text-black">
					<Form
						value={amount}
						onChange={(_amount: number) => setAmount(_amount)}
					/>
				</section>
				<section className="bg-emerald-800 flex-1 rounded-3xl p-8 text-white">
					<ul className="flex flex-col justify-center gap-4">
						{Object.entries(COTIZACIONES).map(
							([name, value]: [string, Cotizacion]) => {
								const total = amount
									? Number(amount / value.venta)
									: value.venta

								return (
									<li
										key={name}
										className="flex items-center gap-4 justify-between"
									>
										<div className="text-emerald-100">{name}</div>
										<div className="flex items-center gap-4">
											{amount ? (
												<div className="text-emerald-500 text-xl font-bold">
													{Number(total).toLocaleString("es-AR", {
														style: "currency",
														currency: "ARS",
													})}
												</div>
											) : null}
											<div className="text-emerald-300 text-3xl font-bold">
												{Number(value.venta).toLocaleString("es-AR", {
													style: "currency",
													currency: "ARS",
												})}
											</div>
										</div>
									</li>
								)
							}
						)}
					</ul>
				</section>
			</main>
		</div>
	)
}
