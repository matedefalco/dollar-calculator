import React from "react"
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
	return (
		<div>
			<main className="flex gap-4 h-full">
				<section className="flex-1 text-black">
					<Form />
				</section>
				<section className="bg-emerald-800 flex-1 rounded-3xl p-8 text-white overflow-y-auto">
					<ul className="flex flex-col gap-4">
						{Object.entries(COTIZACIONES).map(
							([name, value]: [string, Cotizacion]) => (
								<li
									key={name}
									className="flex items-center gap-4 justify-between"
								>
									<div className="text-sm text-emerald-100">{name}</div>
									<div className="text-emerald-300 text-3xl font-bold">
										{Number(value.venta).toLocaleString("es-AR", {
											style: "currency",
											currency: "ARS",
										})}
									</div>
								</li>
							)
						)}
					</ul>
				</section>
			</main>
		</div>
	)
}
